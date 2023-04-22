import { Schedule } from "../../entities/Schedules";

interface IScheduleRepository {
    create(user: Schedule): Promise<Schedule>;
    exists(schedule_date: Date, patient_id: number): Promise<boolean>;
    ofThePeriod(filterPeriod: any):  Promise<Array<Schedule>>;
};

export { IScheduleRepository };
