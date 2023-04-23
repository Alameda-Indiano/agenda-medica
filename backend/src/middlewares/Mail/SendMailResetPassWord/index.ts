import { IRequest } from "../../../shared/interfaces/IRequest";
import { code, statuscode } from "../../../shared/interfaces/StatusCode";
import { IResponse } from "../../../shared/interfaces/IResponse";
import { IResponseError } from "../../../shared/ErrorHandling/ParametersError/IResponseError";
import { ISendMailResetPassWordDTO } from "../../../useCases/UserCases/IUserDTOs/ICodeReqResetPasswordDTO";
import { ResetPassWordTemplateMail } from "../Templates/ResetPassWordTemplateMail";
import { IResponseSucess } from "../../../shared/ErrorHandling/ParametersSucess/IResponseSucess";
import { ISendMailService } from "../../../shared/Services/SendMailService/ISendMailService";

class SendMailResetPassWord {

    constructor(
        private sendMailService: ISendMailService
    ){}

    public async handle(req: IRequest<ISendMailResetPassWordDTO, any>, res: IResponse<IResponseError | IResponseSucess<undefined>>) {

        try {
            
            const { code, email } = req.body;

            const resetPassWordTemplateMail = ResetPassWordTemplateMail({ code });

            if (!resetPassWordTemplateMail) return res.status(statuscode.INTERNAL_SERVER_ERROR).json({
                message: 'Could not generate email template!',
                statusCode: statuscode.INTERNAL_SERVER_ERROR
            });
            
            const { statusCode } = await this.sendMailService.send({
                subject: 'My Pharma - Código para Redefinição de Senha',
                to: email,
                body: resetPassWordTemplateMail
            });

            if (statusCode !== statuscode.ACCEPTED) return res.status(statusCode as code).json({
                message: 'The email with the password reset code could not be sent. Please try again later.',
                statusCode: statusCode as code
            });

            return res.status(statuscode.OK).json({
                message: 'Password Reset Email Sent Successfully.',
                statusCode: statuscode.OK
            });

        } catch (error: any) {
            return res.status(statuscode.INTERNAL_SERVER_ERROR).json(error.message);
        };

    };

};

export { SendMailResetPassWord };