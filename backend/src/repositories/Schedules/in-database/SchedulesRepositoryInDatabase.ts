import { WhereAttributeHashValue } from "sequelize";
import { SchedulesModel } from "../../../database/models/Schedules/SchedulesModel";
import { Schedule } from "../../../entities/Schedules";
import { ScheduleDate } from "../../../entities/Schedules/validator/scheduleDate";
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

    async ofThePeriod(filterPeriod: WhereAttributeHashValue<ScheduleDate | Date>): Promise<Array<Schedule>> {

        const schedules = await SchedulesModel.findAll({ 
            where: { 
                schedule_date: filterPeriod
            }
        });

        //@ts-ignore
        return schedules;
    };

    async ofTheStatus(filterStatus: string): Promise<Array<Schedule>> {

        const schedules = await SchedulesModel.findAll({ where: { status: filterStatus }});

        //@ts-ignore
        return schedules;
    };

};

export { ScheduleRepositoryInDatabase };