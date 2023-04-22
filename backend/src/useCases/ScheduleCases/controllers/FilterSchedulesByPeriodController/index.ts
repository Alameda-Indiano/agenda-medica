import { IRequest } from "../../../../shared/interfaces/IRequest";
import { IResponse } from "../../../../shared/interfaces/IResponse";
import { IResponseError } from "../../../../shared/ErrorHandling/ParametersError/IResponseError";
import { FilterSchedulesByPeriodService } from "../../services/FilterSchedulesByPeriodService";
import { IResponseSucess } from "../../../../shared/ErrorHandling/ParametersSucess/IResponseSucess";
import { statuscode } from "../../../../shared/interfaces/StatusCode";
import { ISchedulesByPeriodParams } from "../../IScheduleDTOs/ISchedulesByPeriodDTO";
import { IDefaultReturnDTO } from "../../IScheduleDTOs/IDefaultReturnDTO";

class FilterSchedulesByPeriodController {
    
    constructor(
        private filterSchedulesByPeriodService: FilterSchedulesByPeriodService
    ) {};

    async handle(req: IRequest<null, ISchedulesByPeriodParams>, res: IResponse<IResponseError | IResponseSucess<IDefaultReturnDTO>>) {

        try {

            const { period } = req.params;

            const result = await this.filterSchedulesByPeriodService.execute(period);

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