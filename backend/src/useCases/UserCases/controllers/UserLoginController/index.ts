import { IRequest } from "../../../../shared/interfaces/IRequest";
import { IResponse } from "../../../../shared/interfaces/IResponse";
import { IResponseError } from "../../../../shared/ErrorHandling/ParametersError/IResponseError";
import { ILoginUserDTO, IResponseLoginUser } from "../../IUserDTOs/ILoginUserDTO";
import { UserLoginService } from "../../services/UserLoginService";
import { IResponseSucess } from "../../../../shared/ErrorHandling/ParametersSucess/IResponseSucess";
import { statuscode } from "../../../../shared/interfaces/StatusCode";

class UserLoginController {
    
    constructor(
        private userLoginService: UserLoginService
    ) {};

    async handle(req: IRequest<ILoginUserDTO, any>, res: IResponse<IResponseError | IResponseSucess<IResponseLoginUser>>) {

        try {
            
            const { email, password } = req.body;

            const result = await this.userLoginService.execute({ email, password });

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

export { UserLoginController };