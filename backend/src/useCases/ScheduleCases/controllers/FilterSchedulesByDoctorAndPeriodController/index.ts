import { IRequest } from "../../../../shared/interfaces/IRequest";
import { IResponse } from "../../../../shared/interfaces/IResponse";
import { IResponseError } from "../../../../shared/ErrorHandling/ParametersError/IResponseError";
import { FilterSchedulesByDoctorAndPeriodService } from "../../services/FilterSchedulesByDoctorAndPeriodService";
import { IResponseSucess } from "../../../../shared/ErrorHandling/ParametersSucess/IResponseSucess";
import { statuscode } from "../../../../shared/interfaces/StatusCode";
import { IDoctorByPeriodParams } from "../../IScheduleDTOs/ISchedulesDoctorByPeriodDTO";
import { IDefaultReturnDTO } from '../../IScheduleDTOs/IDefaultReturnDTO';

class FilterSchedulesByDoctorAndPeriodController {
    
    constructor(
        private filterSchedulesByDoctorAndPeriodService: FilterSchedulesByDoctorAndPeriodService
    ) {};

    async handle(req: IRequest<null, IDoctorByPeriodParams>, res: IResponse<IResponseError | IResponseSucess<IDefaultReturnDTO>>) {

        try {

            const { doctorAndPeriod } = req.params;

            const result = await this.filterSchedulesByDoctorAndPeriodService.execute(doctorAndPeriod);

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
                    value: { schedules, total_schedules }
                } = result.sucess;

                return res.status(statusCode).json({ 
                    message,
                    statusCode,
                    jwt: req.jwt,
                    value: {
                        schedules, 
                        total_schedules
                    }
                });
            };

        } catch (error: any) {
            return res.status(statuscode.INTERNAL_SERVER_ERROR).json(error.message);
        };

    };

};

export { FilterSchedulesByDoctorAndPeriodController };