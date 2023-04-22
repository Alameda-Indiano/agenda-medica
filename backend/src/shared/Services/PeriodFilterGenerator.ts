import { Op } from "sequelize";
import { WhereAttributeHashValue } from "sequelize";
import { ScheduleDate } from "../../entities/Schedules/validator/scheduleDate";
import { PeriodParamsValue } from "../../useCases/ScheduleCases/IScheduleDTOs/ISchedulesByPeriodDTO";
import { Either, error, sucess } from "../ErrorHandling/Either";
import { ParametersError } from "../ErrorHandling/ParametersError";
import { statuscode } from "../interfaces/StatusCode";

class PeriodFilterGenerator {

    private dateOfThePeriod: WhereAttributeHashValue<ScheduleDate | Date>;
    
    public execute(period: PeriodParamsValue): Either<ParametersError, WhereAttributeHashValue<ScheduleDate | Date>> {

        if (!period.trim()) return error(new ParametersError('You must enter a period for the filter.', statuscode.BAD_REQUEST));

        switch (period) {
            
            case 'Today':

                this.dateOfThePeriod = {
                    [Op.between]: [new Date(new Date().setHours(0, 0, 0, 0)), new Date(new Date().setHours(23, 59, 59, 0))]
                };
                break;
            
            case 'Week':

                this.dateOfThePeriod = {
                    [Op.between]: [
                        new Date(new Date().setHours(0, 0, 0, 0)), 
                        new Date(new Date(new Date(new Date().setDate(new Date().getDate() + 7))).setHours(0, 0, 0, 0))
                    ]
                };
                break;
            
            case 'Month':

                this.dateOfThePeriod = {
                    [Op.between]: [
                        new Date(new Date().setHours(0, 0, 0, 0)),                     
                        new Date(new Date(new Date(new Date().setDate(new Date().getDate() + 30))).setHours(0, 0, 0, 0))
                    ]
                };
                break;

            default: return error(new ParametersError('The period requested in the filter does not exist!', statuscode.NOT_FOUND));
        };

        return sucess(this.dateOfThePeriod);
    };
    
};

export {  
    PeriodFilterGenerator
};