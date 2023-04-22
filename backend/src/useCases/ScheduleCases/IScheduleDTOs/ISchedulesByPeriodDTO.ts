import { Schedule } from "../../../entities/Schedules";

interface ISchedulesByPeriodDTO { 
    schedules: Array<Schedule>, 
    total_schedules: number 
};

type PeriodParamsValue = 'Today' | 'Week' | 'Month';

interface ISchedulesByPeriodParams {
    period: PeriodParamsValue | any
};

export { ISchedulesByPeriodDTO, ISchedulesByPeriodParams, PeriodParamsValue };