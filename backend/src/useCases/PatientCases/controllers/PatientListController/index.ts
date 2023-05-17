import { IRequest } from "../../../../shared/interfaces/IRequest";
import { IResponse } from "../../../../shared/interfaces/IResponse";
import { IResponseError } from "../../../../shared/ErrorHandling/ParametersError/IResponseError";
import { ICreatePatientDTO } from "../../IPatientDTOs/ICreatePatientDTO";
import { PatientListService } from "../../services/PatientListService";
import { IResponseSucess } from "../../../../shared/ErrorHandling/ParametersSucess/IResponseSucess";
import { Patient } from "../../../../entities/Patients";
import { statuscode } from "../../../../shared/interfaces/StatusCode";

class PatientListController {
    
    constructor(
        private patientListService: PatientListService
    ) {};

    async handle(req: IRequest<any, any>, res: IResponse<IResponseError | IResponseSucess<Array<Patient>>>) {

        try {

            const result = await this.patientListService.execute();

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
                    value
                } = result.sucess;

                return res.status(statusCode).json({ 
                    message,
                    statusCode,
                    jwt: req.jwt,
                    value
                });
            };

        } catch (error: any) {
            return res.status(statuscode.INTERNAL_SERVER_ERROR).json(error.message);
        };

    };

};

export { PatientListController };