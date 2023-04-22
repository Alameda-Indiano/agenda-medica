import { IScheduleRepository } from '../../../../repositories/Schedules/ISchedulesRepositories';
import { Either, error, sucess } from '../../../../shared/ErrorHandling/Either';
import { ParametersError } from '../../../../shared/ErrorHandling/ParametersError';
import { IResponseSucess } from '../../../../shared/ErrorHandling/ParametersSucess/IResponseSucess';
import { ParametersSucess } from '../../../../shared/ErrorHandling/ParametersSucess';
import { statuscode } from '../../../../shared/interfaces/StatusCode';
import { PeriodParamsValue } from '../../IScheduleDTOs/ISchedulesByPeriodDTO';
import { IDefaultReturnDTO } from '../../IScheduleDTOs/IDefaultReturnDTO';
import { PeriodFilterGeneratorService } from '../../../../shared/Services/PeriodFilterGeneratorService';

class FilterSchedulesByPeriodService {

    constructor(
        private schedulesRepository: IScheduleRepository,
        private periodFilterGeneratorService: PeriodFilterGeneratorService
    ) {};

    async execute(period: PeriodParamsValue): Promise<Either<ParametersError, IResponseSucess<IDefaultReturnDTO>>> {

        const result = this.periodFilterGeneratorService.execute(period)

        if (result.isException()) {
            const { statusCode, message } = result.exception;
            return error(
                new ParametersError(message, statusCode)
            );
        };

        const schedules = await this.schedulesRepository.filterByPeriod(result.sucess);

        if (schedules.length === 0) {
            return sucess(
                new ParametersSucess(`Appointments could not be found for the reporting period (${period}).`, 
                    statuscode.PARTIAL_CONTENT, { 
                        schedules,
                        total_schedules: schedules.length
                    }
                )
            );
        };

        return sucess(
            new ParametersSucess(`Schedules of the ${period}`, statuscode.OK, { 
                schedules,
                total_schedules: schedules.length
            })
        );
         
    };

};

export { FilterSchedulesByPeriodService };