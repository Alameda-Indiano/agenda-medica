import { IScheduleRepository } from '../../../../repositories/Schedules/ISchedulesRepositories';
import { Schedule } from '../../../../entities/Schedules';
import { ICreateScheduleDTO } from '../../IScheduleDTOs/ICreateScheduleDTO';
import { Either, error, sucess } from '../../../../shared/ErrorHandling/Either';
import { ParametersError } from '../../../../shared/ErrorHandling/ParametersError';
import { ParametersSucess } from '../../../../shared/ErrorHandling/ParametersSucess';
import { statuscode } from '../../../../shared/interfaces/StatusCode';

class CreateScheduleService {

    declare private _schedule: Schedule;

    constructor(
        private schedulesRepository: IScheduleRepository
    ) {};

    async execute({ name, status, schedule_date, patient_id, doctor_id }: ICreateScheduleDTO): Promise<Either<ParametersError, ParametersSucess<Schedule>>> {
        
        const scheduleAlreadyExists = await this.schedulesRepository.exists(schedule_date, patient_id);

        if (!!scheduleAlreadyExists) return error(new ParametersError('There is already an appointment for this patient on this date.', statuscode.CONFLICT));

        const newSchedule = Schedule.create({ name, status, schedule_date, patient_id, doctor_id });

        if (newSchedule.isException()) {
            const { statusCode, message } = newSchedule.exception;
            return error(new ParametersError(message, statusCode));
        };

        if (newSchedule.isSucess()) {

            let { name, doctor_id, patient_id, schedule_date, status } = newSchedule.sucess;

            const schedule = await this.schedulesRepository.create({ name, doctor_id, patient_id, schedule_date, status });

            if (!schedule) return error(new ParametersError('Error registering schedule!', statuscode.BAD_REQUEST));
    
            this._schedule = schedule;
        };

        return sucess(
            new ParametersSucess('Usuário cadastrado com sucesso', statuscode.CREATED,  this._schedule)
        );
         
    };

};

export { CreateScheduleService };