import { IRequest } from "../../../../shared/interfaces/IRequest";
import { IResponse } from "../../../../shared/interfaces/IResponse";
import { IResponseError } from "../../../../shared/ErrorHandling/ParametersError/IResponseError";
import { ICreateDoctorDTO } from "../../IDoctorDTOs/ICreateDoctorDTO";
import { CreateDoctorService } from "../../services/DoctorCreateService";
import { IResponseSucess } from "../../../../shared/ErrorHandling/ParametersSucess/IResponseSucess";
import { Doctor } from "../../../../entities/Doctors";
import { statuscode } from "../../../../shared/interfaces/StatusCode";

class CreateDoctorController {
    
    constructor(
        private createDoctor: CreateDoctorService
    ) {};

    async handle(req: IRequest<ICreateDoctorDTO, any>, res: IResponse<IResponseError | IResponseSucess<Doctor>>) {

        try {
            
            const { name, email } = req.body;

            const result = await this.createDoctor.execute({ name, email });

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
                    jwt: req.jwt,
                    value: {
                        id: id as number, 
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

export { CreateDoctorController };