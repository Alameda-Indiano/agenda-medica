import { IUserRepository } from '../../../../repositories/Users/IUsersRepositories';
import { ICodeReqResetPasswordDTO, IResCodeResetPassWord } from '../../IUserDTOs/ICodeReqResetPasswordDTO';
import { Either, error, sucess } from '../../../../shared/ErrorHandling/Either';
import { ParametersError } from '../../../../shared/ErrorHandling/ParametersError';
import { IResponseSucess } from '../../../../shared/ErrorHandling/ParametersSucess/IResponseSucess';
import { ParametersSucess } from '../../../../shared/ErrorHandling/ParametersSucess';
import { statuscode } from '../../../../shared/interfaces/StatusCode';
import { GeneratorcCodeService } from '../../../../shared/Services/GeneratorcCodeService';

class UserCodeResetPassworService {

    constructor(
        private usersRepository: IUserRepository,
        private generatorcCodeService: GeneratorcCodeService
    ){};

    async execute({ email }: ICodeReqResetPasswordDTO): Promise<Either<ParametersError, IResCodeResetPassWord>> {
        
        const userAlreadyExists = await this.usersRepository.exists(email);

        if (!userAlreadyExists) return error(new ParametersError('Could not find a user with the email entered!', statuscode.BAD_REQUEST));

        const { code, codeExpiresIn } = this.generatorcCodeService.execute({ expiresMin: 10 });

        const resultSetCode = await this.usersRepository.setCodeResetPassword(code, codeExpiresIn, email);

        if (!resultSetCode) return error(new ParametersError('The code for password reset could not be generated.', statuscode.INTERNAL_SERVER_ERROR));

        return sucess({ code, email });
         
    };

};

export { UserCodeResetPassworService };