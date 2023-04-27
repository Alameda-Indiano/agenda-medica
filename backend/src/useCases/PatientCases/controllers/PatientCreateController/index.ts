import { IRequest } from "../../../../shared/interfaces/IRequest";
import { IResponse } from "../../../../shared/interfaces/IResponse";
import { IResponseError } from "../../../../shared/ErrorHandling/ParametersError/IResponseError";
import { ICreatePatientDTO } from "../../IPatientDTOs/ICreatePatientDTO";
import { CreatePatientService } from "../../services/PatientCreateService";
import { IResponseSucess } from "../../../../shared/ErrorHandling/ParametersSucess/IResponseSucess";
import { Patient } from "../../../../entities/Patients";
import { statuscode } from "../../../../shared/interfaces/StatusCode";

class CreatePatientController {
    
    constructor(
        private createPatient: CreatePatientService
    ) {};

    async handle(req: IRequest<ICreatePatientDTO, any>, res: IResponse<IResponseError | IResponseSucess<Patient>>) {

        try {
            
            const { name, email, age, sex } = req.body;

            const result = await this.createPatient.execute({ name: name.toLowerCase(), email: email.toLowerCase(), age, sex });

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
                    value: { id, name, email, age, sex, status }
                } = result.sucess;

                return res.status(statusCode).json({ 
                    message,
                    statusCode,
                    jwt: req.jwt,
                    value: {
                        id: id as number, 
                        name,  
                        email,
                        age, 
                        sex,
                        status
                    }
                });
            };

        } catch (error: any) {
            return res.status(statuscode.INTERNAL_SERVER_ERROR).json(error.message);
        };

    };

};

export { CreatePatientController };