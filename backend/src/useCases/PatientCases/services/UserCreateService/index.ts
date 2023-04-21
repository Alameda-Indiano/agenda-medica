import { IUserRepository } from '../../../../repositories/Users/IUsersRepositories';
import { User } from '../../../../entities/User';
import { ICreateUserDTO } from '../../IUserDTOs/ICreateUserDTO';
import { Either, error, sucess } from '../../../../shared/ErrorHandling/Either';
import { ParametersError } from '../../../../shared/ErrorHandling/ParametersError';
import { IResponseSucess } from '../../../../shared/ErrorHandling/ParametersSucess/IResponseSucess';
import { ParametersSucess } from '../../../../shared/ErrorHandling/ParametersSucess';
import { statuscode } from '../../../../shared/interfaces/StatusCode';
import bcrypt from 'bcryptjs';

class CreateUserService {

    declare private _user: User;

    constructor(
        private usersRepository: IUserRepository
    ) {};

    async execute({ name, email, password }: ICreateUserDTO): Promise<Either<ParametersError, IResponseSucess<User>>> {
        
        const userAlreadyExists = await this.usersRepository.exists(email);

        if (!!userAlreadyExists) return error(new ParametersError('User Already Exists!', statuscode.CONFLICT));

        const newUser = User.create({ name, email, password });

        if (newUser.isException()) {
            const { statusCode, message } = newUser.exception;
            return error(new ParametersError(message, statusCode));
        };

        if (newUser.isSucess()) {

            let { name, email, password } = newUser.sucess;

            //@ts-ignores
            password = bcrypt.hashSync(password, 8);

            console.log(password)

            const user = await this.usersRepository.create({ name, email, password });

            if (!user) return error(new ParametersError('Error registering user!', statuscode.BAD_REQUEST));
    
            this._user = user;
        };

        return sucess(
            new ParametersSucess('Usuário cadastrado com sucesso', statuscode.CREATED,  this._user)
        );
         
    };

};

export { CreateUserService };