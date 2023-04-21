import { Either, error, sucess } from "../../../../shared/ErrorHandling/Either";
import { statuscode } from "../../../../shared/interfaces/StatusCode";
import { ParametersError } from "../../../../shared/ErrorHandling/ParametersError";

class ScheduleDate {

    private constructor(
        private readonly scheduleDate: Date | ScheduleDate
    ){
        this.scheduleDate = scheduleDate;
        Object.freeze(this);
    };

    static create(scheduleDate: Date): Either<ParametersError, ScheduleDate> {

        const currentDate = new Date();

        if (!scheduleDate) return error(new ParametersError('Schedule date is required', statuscode.BAD_REQUEST))
        else if (new Date(scheduleDate) < currentDate) return error(new ParametersError('The scheduling date must be longer than the current date!', statuscode.BAD_REQUEST))
        else return sucess(new ScheduleDate(scheduleDate));

    };

    get value() {
        return this.scheduleDate as ScheduleDate;
    };

};

export { ScheduleDate };