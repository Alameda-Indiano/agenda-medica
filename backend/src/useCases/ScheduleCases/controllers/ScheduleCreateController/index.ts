import { IRequest } from "../../../../shared/interfaces/IRequest";
import { IResponse } from "../../../../shared/interfaces/IResponse";
import { IResponseError } from "../../../../shared/ErrorHandling/ParametersError/IResponseError";
import { ICreateScheduleDTO } from "../../IScheduleDTOs/ICreateScheduleDTO";
import { CreateScheduleService } from "../../services/ScheduleCreateService";
import { IResponseSucess } from "../../../../shared/ErrorHandling/ParametersSucess/IResponseSucess";
import { Schedule } from "../../../../entities/Schedules";
import { statuscode } from "../../../../shared/interfaces/StatusCode";

class CreateScheduleController {
    
    constructor(
        private createSchedule: CreateScheduleService
    ) {};

    async handle(req: IRequest<ICreateScheduleDTO, null>, res: IResponse<IResponseError | IResponseSucess<Schedule>>) {

        try {
            
            const { name, status, doctor_id, patient_id, schedule_date } = req.body;

            const result = await this.createSchedule.execute({ name, status, doctor_id, patient_id, schedule_date });

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
                    value: { id, name, doctor_id, patient_id, schedule_date, status }
                } = result.sucess;

                return res.status(statusCode).json({ 
                    message,
                    statusCode,
                    value: {
                        id: id as number, 
                        name,  
                        doctor_id,
                        patient_id,
                        schedule_date,
                        status
                    }
                });
            };

        } catch (error: any) {
            return res.status(statuscode.INTERNAL_SERVER_ERROR).json(error.message);
        };

    };

};

export { CreateScheduleController };