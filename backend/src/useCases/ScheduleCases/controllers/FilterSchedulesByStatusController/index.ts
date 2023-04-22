import { IRequest } from "../../../../shared/interfaces/IRequest";
import { IResponse } from "../../../../shared/interfaces/IResponse";
import { IResponseError } from "../../../../shared/ErrorHandling/ParametersError/IResponseError";
import { FilterSchedulesByStatusService } from "../../services/FilterSchedulesByStatusService";
import { IResponseSucess } from "../../../../shared/ErrorHandling/ParametersSucess/IResponseSucess";
import { statuscode } from "../../../../shared/interfaces/StatusCode";
import { ISchedulesByStatusParams } from "../../IScheduleDTOs/ISchedulesByStatusDTO";
import { IDefaultReturnDTO } from "../../IScheduleDTOs/IDefaultReturnDTO";

class FilterSchedulesByStatusController {
    
    constructor(
        private filterSchedulesByStatusService: FilterSchedulesByStatusService
    ) {};

    async handle(req: IRequest<null, ISchedulesByStatusParams>, res: IResponse<IResponseError | IResponseSucess<IDefaultReturnDTO>>) {

        try {

            const { status } = req.params;

            const result = await this.filterSchedulesByStatusService.execute(status);

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

export { FilterSchedulesByStatusController };