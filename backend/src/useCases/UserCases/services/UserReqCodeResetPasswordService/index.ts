import { IUserRepository } from '../../../../repositories/Users/IUsersRepositories';
import { IReqResetPasswordDTO } from '../../IUserDTOs/IReqResetPasswordDTO';
import { ICodeResetPassWordDTO } from '../../IUserDTOs/ICodeResetPassWordDTO';
import { Either, error, sucess } from '../../../../shared/ErrorHandling/Either';
import { ParametersError } from '../../../../shared/ErrorHandling/ParametersError';
import { statuscode } from '../../../../shared/interfaces/StatusCode';
import { GeneratorCodeService } from '../../../../shared/Services/GeneratorCodeService';
import bcrypt from 'bcryptjs';

class UserReqCodeResetPasswordService {

    constructor(
        private usersRepository: IUserRepository,
        private generatorCodeService: GeneratorCodeService
    ){};

    async execute({ email }: IReqResetPasswordDTO): Promise<Either<ParametersError, ICodeResetPassWordDTO>> {
        
        const userAlreadyExists = await this.usersRepository.exists(email);

        if (!userAlreadyExists) return error(new ParametersError('Could not find a user with the email entered!', statuscode.BAD_REQUEST));

        let { code, codeExpiresIn } = this.generatorCodeService.execute({ expiresMin: 10 });

        const resultSetCode = await this.usersRepository.setCodeResetPassword(bcrypt.hashSync(code, 8), codeExpiresIn, email);

        if (!resultSetCode) return error(new ParametersError('The code for password reset could not be generated.', statuscode.INTERNAL_SERVER_ERROR));

        return sucess({ code, email });
         
    };

};

export { UserReqCodeResetPasswordService };