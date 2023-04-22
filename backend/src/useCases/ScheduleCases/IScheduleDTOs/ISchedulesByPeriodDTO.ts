type PeriodParamsValue = 'Today' | 'Week' | 'Month';

interface ISchedulesByPeriodParams {
    period: PeriodParamsValue | any
};

export { ISchedulesByPeriodParams, PeriodParamsValue };