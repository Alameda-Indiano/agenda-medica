import { IRequest } from "../../../../shared/interfaces/IRequest";
import { IResponse } from "../../../../shared/interfaces/IResponse";
import { IResponseError } from "../../../../shared/ErrorHandling/ParametersError/IResponseError";
import { ICodeReqResetPasswordDTO, ISendMailResetPassWordDTO } from "../../IUserDTOs/ICodeReqResetPasswordDTO";
import { UserCodeResetPassworService } from "../../services/UserCodeResetPassworService";
import { IResponseSucess } from "../../../../shared/ErrorHandling/ParametersSucess/IResponseSucess";
import { statuscode } from "../../../../shared/interfaces/StatusCode";
import { NextFunction } from "express";

class UserCodeResetPassworController {
    
    constructor(
        private userCodeResetPassworService: UserCodeResetPassworService
    ) {};

    async handle(req: IRequest<ICodeReqResetPasswordDTO | ISendMailResetPassWordDTO, any>, res: IResponse<IResponseError | IResponseSucess<undefined>>, next: NextFunction) {

        try {
            
            const { email } = req.body;

            const result = await this.userCodeResetPassworService.execute({ email });

            if (result.isException()) {

                const { statusCode, message } = result.exception;

                return res.status(statusCode).json({ 
                    message,
                    statusCode
                });
            };

            if (result.isSucess()) {
                const { code, email } = result.sucess;
                req.body = { code, email };
                next();
            };

        } catch (error: any) {
            return res.status(statuscode.INTERNAL_SERVER_ERROR).json(error.message);
        };

    };

};

export { UserCodeResetPassworController };