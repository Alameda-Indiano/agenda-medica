import { IScheduleRepository } from '../../../../repositories/Schedules/ISchedulesRepositories';
import { Either, sucess } from '../../../../shared/ErrorHandling/Either';
import { ParametersError } from '../../../../shared/ErrorHandling/ParametersError';
import { IResponseSucess } from '../../../../shared/ErrorHandling/ParametersSucess/IResponseSucess';
import { ParametersSucess } from '../../../../shared/ErrorHandling/ParametersSucess';
import { statuscode } from '../../../../shared/interfaces/StatusCode';
import { ISchedulesByStatusDTO, StatusParamsValue } from '../../IScheduleDTOs/ISchedulesByStatusDTO';
import { WhereAttributeHashValue } from 'sequelize';
import { ScheduleDate } from '../../../../entities/Schedules/validator/scheduleDate';

class SchedulesByStatusService {

    constructor(
        private schedulesRepository: IScheduleRepository
    ) {};

    async execute(status: StatusParamsValue): Promise<Either<ParametersError, IResponseSucess<ISchedulesByStatusDTO>>> {

        const schedules = await this.schedulesRepository.ofTheStatus(status);

        if (schedules.length === 0) {
            return sucess(
                new ParametersSucess(`Appointments could not be found for the reporting period (${status}).`, 
                    statuscode.PARTIAL_CONTENT, { 
                        schedules,
                        total_schedules: schedules.length
                    }
                )
            );
        };

        return sucess(
            new ParametersSucess(`Schedules of the ${status}`, statuscode.OK, { 
                schedules,
                total_schedules: schedules.length
            })
        );
         
    };

};

export { SchedulesByStatusService };