import { IUserRepository } from '../../../../repositories/Users/IUsersRepositories';
import { User } from '../../../../entities/User';
import { IRequestCreateUserDTO } from '../../IUserDTOs';
import { Either, error, sucess } from '../../../../shared/either';
import { ParametersError } from '../../../../shared/ParametersError';
import { IResponseSucess } from '../../../../shared/ParametersSucess/IResponseSucess';
import { ParametersSucess } from '../../../../shared/ParametersSucess';
import { statuscode } from '../../../../shared/interfaces/StatusCode';
import bcrypt from 'bcryptjs';

class CreateUserService {

    declare private _user: User;

    constructor(
        private usersRepository: IUserRepository
    ) {};

    async execute({ name, email, password }: IRequestCreateUserDTO): Promise<Either<ParametersError, IResponseSucess<User>>> {
        
        const userAlreadyExists = await this.usersRepository.exists(email);

        if (!!userAlreadyExists) return error(new ParametersError('User Already Exists!', statuscode.CONFLICT));

        const newUser = User.create({ name, email, password });

        if (newUser.isException()) {
            const { statusCode, message } = newUser.exception;
            return error(new ParametersError(message, statusCode));
        };

        if (newUser.isSucess()) {

            let { name, email, password } = newUser.sucess;

            password = bcrypt.hashSync(password, 8);

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