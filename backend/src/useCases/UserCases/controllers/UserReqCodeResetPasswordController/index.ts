import { IRequest } from "../../../../shared/interfaces/IRequest";
import { IResponse } from "../../../../shared/interfaces/IResponse";
import { IResponseError } from "../../../../shared/ErrorHandling/ParametersError/IResponseError";
import { UserReqCodeResetPasswordService } from "../../services/UserReqCodeResetPasswordService";
import { IResponseSucess } from "../../../../shared/ErrorHandling/ParametersSucess/IResponseSucess";
import { statuscode } from "../../../../shared/interfaces/StatusCode";
import { NextFunction } from "express";
import { IReqResetPasswordDTO } from "../../IUserDTOs/IReqResetPasswordDTO";
import { ICodeResetPassWordDTO } from "../../IUserDTOs/ICodeResetPassWordDTO";

class UserReqCodeResetPasswordController {
    
    constructor(
        private userReqCodeResetPasswordService: UserReqCodeResetPasswordService
    ) {};

    async handle(req: IRequest<IReqResetPasswordDTO | ICodeResetPassWordDTO, any>, res: IResponse<IResponseError | IResponseSucess<undefined>>, next: NextFunction) {

        try {
            
            const { email } = req.body; 

            const result = await this.userReqCodeResetPasswordService.execute({ email: email.toLowerCase() });

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

export { UserReqCodeResetPasswordController };