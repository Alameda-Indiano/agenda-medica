import { IRequest } from "../../../../shared/interfaces/IRequest";
import { IResponse } from "../../../../shared/interfaces/IResponse";
import { IResponseError } from "../../../../shared/ErrorHandling/ParametersError/IResponseError";
import { SchedulesByPeriodService } from "../../services/SchedulesByPeriodService";
import { IResponseSucess } from "../../../../shared/ErrorHandling/ParametersSucess/IResponseSucess";
import { statuscode } from "../../../../shared/interfaces/StatusCode";
import { ISchedulesByPeriodDTO, ISchedulesByPeriodParams } from "../../IScheduleDTOs/ISchedulesByPeriodDTO";

class FilterSchedulesByPeriodController {
    
    constructor(
        private schedulesByPeriodService: SchedulesByPeriodService
    ) {};

    async handle(req: IRequest<null, ISchedulesByPeriodParams>, res: IResponse<IResponseError | IResponseSucess<ISchedulesByPeriodDTO>>) {

        try {

            const { period } = req.params;

            const result = await this.schedulesByPeriodService.execute(period);

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

export { FilterSchedulesByPeriodController };