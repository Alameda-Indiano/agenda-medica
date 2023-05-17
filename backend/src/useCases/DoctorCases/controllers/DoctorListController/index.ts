import { IRequest } from "../../../../shared/interfaces/IRequest";
import { IResponse } from "../../../../shared/interfaces/IResponse";
import { IResponseError } from "../../../../shared/ErrorHandling/ParametersError/IResponseError";
import { DoctorListService } from "../../services/DoctorListService";
import { IResponseSucess } from "../../../../shared/ErrorHandling/ParametersSucess/IResponseSucess";
import { Doctor } from "../../../../entities/Doctors";
import { statuscode } from "../../../../shared/interfaces/StatusCode";

class DoctorListController {
    
    constructor(
        private doctorListService: DoctorListService
    ) {};

    async handle(req: IRequest<any, any>, res: IResponse<IResponseError | IResponseSucess<Array<Doctor>>>) {

        try {

            const result = await this.doctorListService.execute();

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

export { DoctorListController };