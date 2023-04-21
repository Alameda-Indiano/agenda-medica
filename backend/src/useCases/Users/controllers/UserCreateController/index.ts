import { IRequest } from "../../../../shared/interfaces/IRequest";
import { IResponse } from "../../../../shared/interfaces/IResponse";
import { IResponseError } from "../../../../shared/ParametersError/IResponseError";
import { IRequestCreateUserDTO } from "../../IUserDTOs";
import { CreateUserService } from "../../services/UserCreateService";
import { IResponseSucess } from "../../../../shared/ParametersSucess/IResponseSucess";
import { User } from "../../../../entities/User";
import { statuscode } from "../../../../shared/interfaces/StatusCode";

class CreateUserController {
    
    constructor(
        private createUser: CreateUserService
    ) {};

    async handle(req: IRequest<IRequestCreateUserDTO>, res: IResponse<IResponseError | IResponseSucess<Omit<User, 'password'>>>) {

        try {
            
            const { name, email, password } = req.body;

            const result = await this.createUser.execute({ name, email, password });

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
                    value: { id, name, email }
                } = result.sucess;

                return res.status(statusCode).json({ 
                    message,
                    statusCode,
                    value: {
                        id: id as string, 
                        name,  
                        email
                    }
                });
            };

        } catch (error: any) {
            return res.status(statuscode.INTERNAL_SERVER_ERROR).json(error.message);
        };

    };

};

export { CreateUserController };