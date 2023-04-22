import { Schedule } from "../../../entities/Schedules";
import { IScheduleRepository } from "../ISchedulesRepositories";
import { v4 as uuid } from 'uuid';

class SchedulesRepositoryInMemory implements IScheduleRepository {

    private schedules: Array<Schedule> = [];

    async create(schedules: Schedule): Promise<Schedule> {
        Object.assign(schedules, {
            id: uuid()
        });

        this.schedules.push(schedules);
        return schedules;
    };

    async exists(schedule_date: Date, patient_id: number): Promise<boolean> {

        const schedule = !!this.schedules.find(schedule => { 
            schedule.schedule_date.value as any === schedule_date && 
            schedule.patient_id === patient_id &&
            ( schedule.status.value as any !== "Finalizado" || schedule.status.value as any !== "Cancelado" )
        });

        return schedule;
    };

    async ofTheDay(): Promise<Array<Schedule>> {

        const schedules = this.schedules.filter(schedule => {
            if (
                schedule.schedule_date.value as any >= new Date(new Date().setHours(0, 0, 0, 0)) && 
                schedule.schedule_date.value as any <= new Date(new Date().setHours(23, 59, 59, 0))
            ) return schedule;
        });

        return schedules;
    };

};

export { SchedulesRepositoryInMemory };