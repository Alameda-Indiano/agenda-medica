import { IUserRepository } from '../../../../repositories/Users/IUsersRepositories';
import { Either, error, sucess } from '../../../../shared/ErrorHandling/Either';
import { ParametersError } from '../../../../shared/ErrorHandling/ParametersError';
import { statuscode } from '../../../../shared/interfaces/StatusCode';
import { GeneratorJwtService } from '../../../../shared/Services/GeneratorJwtService';
import { ParametersSucess } from '../../../../shared/ErrorHandling/ParametersSucess';
import { IResponseJwtDTO } from '../../IUserDTOs/IResponseJwtDTO';
import { PasswordValidate } from '../../../../shared/utils/PasswordValidate';
import bcrypt from 'bcryptjs';
import { IResetPassWordDTO } from '../../IUserDTOs/IResetPassWordDTO';

class UserResetPasswordService {

    constructor(
        private usersRepository: IUserRepository,
        private generatorJwtService: GeneratorJwtService
    ){};

    async execute({ email, code, password }: IResetPassWordDTO): Promise<Either<ParametersError, ParametersSucess<IResponseJwtDTO>>> {
        
        const userAlreadyExists = await this.usersRepository.exists(email);

        if (!userAlreadyExists) return error(new ParametersError('Could not find a user with the email entered!', statuscode.BAD_REQUEST));

        if (!bcrypt.compareSync(code, userAlreadyExists.code as string)) return error(new ParametersError('The password reset code you entered is incorrect.', statuscode.NOT_FOUND)) 

        if (userAlreadyExists.code_expires_in && userAlreadyExists.code_expires_in < new Date()) return error(new ParametersError('The verification code for password reset has expired.', statuscode.NOT_FOUND));

        if (!PasswordValidate(password)) return error(new ParametersError('The password does not follow the expected pattern! (One number, one capital letter & one special character)', statuscode.BAD_REQUEST));

        const userPasswordChanged = await this.usersRepository.resetPassword(bcrypt.hashSync(password, 8), email);

        if (!userPasswordChanged) return error(new ParametersError('The user password could not be changed.', statuscode.INTERNAL_SERVER_ERROR));

        const jwt = this.generatorJwtService.execute({ user_id: userAlreadyExists.id as number });

        return sucess(new ParametersSucess('The user password has been successfully changed.', statuscode.OK, { jwt }));
         
    };

};

export { UserResetPasswordService };