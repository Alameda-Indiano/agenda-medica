import { Schedule } from "../../entities/Schedules";
import { PeriodParamsValue } from "../../useCases/ScheduleCases/IScheduleDTOs/ISchedulesByPeriodDTO";
import { StatusParamsValue } from "../../useCases/ScheduleCases/IScheduleDTOs/ISchedulesByStatusDTO";

interface IScheduleRepository {
    create(user: Schedule): Promise<Schedule>;
    exists(schedule_date: Date, patient_id: number): Promise<boolean>;
    filterByPeriod(filterPeriod: any):  Promise<Array<Schedule>>;
    filterByStatus(filterStatus: StatusParamsValue):  Promise<Array<Schedule>>;
    filterByDoctorAndPeriod(doctorName: string, period: any):  Promise<Array<Schedule>>;
};

export { IScheduleRepository };
