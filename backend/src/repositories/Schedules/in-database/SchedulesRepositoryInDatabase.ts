import { SchedulesModel } from "../../../database/models/Schedules/SchedulesModel";
import { Schedule } from "../../../entities/Schedules";
import { IScheduleRepository } from "../ISchedulesRepositories";

class ScheduleRepositoryInDatabase implements IScheduleRepository {

    async create({ name, status, schedule_date, patient_id, doctor_id }: Schedule): Promise<Schedule> {

        const schedule = await SchedulesModel.create({ name, status, schedule_date, patient_id, doctor_id });
        return schedule as Schedule;
    };

    async exists(schedule_date: Date, patient_id: number): Promise<boolean> {
        const schedules = await SchedulesModel.findAll({ where: { patient_id, schedule_date: new Date(schedule_date) } });

        return !!schedules.find((schedule) => schedule.status !== "Finalizado" && schedule.status !== "Cancelado");
    };

};

export { ScheduleRepositoryInDatabase };