import { IScheduleRepository } from '../../../../repositories/Schedules/ISchedulesRepositories';
import { Either, error, sucess } from '../../../../shared/ErrorHandling/Either';
import { ParametersError } from '../../../../shared/ErrorHandling/ParametersError';
import { IResponseSucess } from '../../../../shared/ErrorHandling/ParametersSucess/IResponseSucess';
import { ParametersSucess } from '../../../../shared/ErrorHandling/ParametersSucess';
import { statuscode } from '../../../../shared/interfaces/StatusCode';
import { ISchedulesByPeriodDTO, PeriodParamsValue } from '../../IScheduleDTOs/ISchedulesByPeriodDTO';
import { Op, WhereAttributeHashValue } from 'sequelize';
import { ScheduleDate } from '../../../../entities/Schedules/validator/scheduleDate';

class SchedulesByPeriodService {

    private dateOfThePeriod: WhereAttributeHashValue<ScheduleDate | Date>;

    constructor(
        private schedulesRepository: IScheduleRepository
    ) {
        this.dateOfThePeriod = undefined;
    };

    async execute(period: PeriodParamsValue): Promise<Either<ParametersError, IResponseSucess<ISchedulesByPeriodDTO>>> {

        switch (period) {
            
            case 'Today':

                this.dateOfThePeriod = {
                    [Op.gte]: new Date(new Date().setHours(0, 0, 0, 0)),
                    [Op.lte]: new Date(new Date().setHours(23, 59, 59, 0))
                };
                break;
            
            case 'Week':

                this.dateOfThePeriod = {
                    [Op.gte]: new Date(new Date().setHours(0, 0, 0, 0)),
                    [Op.lte]: new Date(new Date(new Date(new Date().setDate(new Date().getDate() + 7))).setHours(0, 0, 0, 0))
                };
                break;
            
            case 'Month':

                this.dateOfThePeriod = {
                    [Op.gte]: new Date(new Date().setHours(0, 0, 0, 0)),
                    [Op.lte]: new Date(new Date(new Date(new Date().setDate(new Date().getDate() + 30))).setHours(0, 0, 0, 0))
                };
                break;

            default: return error(new ParametersError('The period requested in the filter does not exist!', statuscode.NOT_FOUND));
        };

        const schedules = await this.schedulesRepository.ofThePeriod(this.dateOfThePeriod);

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

export { SchedulesByPeriodService };