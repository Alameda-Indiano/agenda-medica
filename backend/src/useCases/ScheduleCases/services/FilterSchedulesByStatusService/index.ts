import { IScheduleRepository } from '../../../../repositories/Schedules/ISchedulesRepositories';
import { Either, sucess } from '../../../../shared/ErrorHandling/Either';
import { ParametersError } from '../../../../shared/ErrorHandling/ParametersError';
import { IResponseSucess } from '../../../../shared/ErrorHandling/ParametersSucess/IResponseSucess';
import { ParametersSucess } from '../../../../shared/ErrorHandling/ParametersSucess';
import { statuscode } from '../../../../shared/interfaces/StatusCode';
import { StatusParamsValue } from '../../IScheduleDTOs/ISchedulesByStatusDTO';
import { IDefaultReturnDTO } from '../../IScheduleDTOs/IDefaultReturnDTO';

class FilterSchedulesByStatusService {

    constructor(
        private schedulesRepository: IScheduleRepository
    ) {};

    async execute(status: StatusParamsValue): Promise<Either<ParametersError, IResponseSucess<IDefaultReturnDTO>>> {

        const schedules = await this.schedulesRepository.filterByStatus(status);

        if (schedules.length === 0) {
            return sucess(
                new ParametersSucess(`Could not find schedules with status: (${status}).`, 
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

export { FilterSchedulesByStatusService };