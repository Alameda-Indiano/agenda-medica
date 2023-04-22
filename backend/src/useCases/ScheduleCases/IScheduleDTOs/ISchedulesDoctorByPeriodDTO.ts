import { PeriodParamsValue } from "./ISchedulesByPeriodDTO";
import { StatusParamsValue } from "./ISchedulesByStatusDTO";

interface IDoctorByPeriodParams {
    period: PeriodParamsValue | any;
    status: StatusParamsValue | any;
};

export { IDoctorByPeriodParams };