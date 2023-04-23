import { IRequest } from "../../../../shared/interfaces/IRequest";
import { IResponse } from "../../../../shared/interfaces/IResponse";
import { IResponseError } from "../../../../shared/ErrorHandling/ParametersError/IResponseError";
import { IResponseSucess } from "../../../../shared/ErrorHandling/ParametersSucess/IResponseSucess";
import { statuscode } from "../../../../shared/interfaces/StatusCode";
import { IResponseJwtDTO } from "../../IUserDTOs/IResponseJwtDTO";
import { UserResetPasswordService } from "../../services/UserResetPasswordService";
import { IResetPassWordDTO } from "../../IUserDTOs/IResetPassWordDTO";

class UserResetPasswordController {
    
    constructor(
        private userResetPasswordService: UserResetPasswordService
    ) {};

    async handle(req: IRequest<IResetPassWordDTO, any>, res: IResponse<IResponseError | IResponseSucess<IResponseJwtDTO>>) {

        try {
            
            const { email, code, password } = req.body;

            const result = await this.userResetPasswordService.execute({ email, code, password });

            if (result.isException()) {

                const { statusCode, message } = result.exception;

                return res.status(statusCode).json({ 
                    message,
                    statusCode
                });
            };

            if (result.isSucess()) {

                const { 
                    message, 
                    statusCode,
                    value: { jwt }
                } = result.sucess;

                return res.status(statusCode).json({ 
                    message,
                    statusCode,
                    value: {
                        jwt
                    }
                });
            };

        } catch (error: any) {
            return res.status(statuscode.INTERNAL_SERVER_ERROR).json(error.message);
        };

    };

};

export { UserResetPasswordController };