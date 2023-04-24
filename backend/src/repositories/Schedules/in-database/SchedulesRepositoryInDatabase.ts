import { Op } from "sequelize";
import { WhereAttributeHashValue } from "sequelize";
import { DoctorsModel } from "../../../database/models/Doctors/DoctorsModel";
import { SchedulesModel } from "../../../database/models/Schedules/SchedulesModel";
import { Schedule } from "../../../entities/Schedules";
import { ScheduleDate } from "../../../entities/Schedules/validator/scheduleDate";
import { IScheduleRepository } from "../ISchedulesRepositories";

class ScheduleRepositoryInDatabase implements IScheduleRepository {

    async create({ name, status, schedule_date, patient_id, doctor_id }: Schedule): Promise<Schedule> {

        //@ts-ignore
        const schedule = await SchedulesModel.create({ name, status, schedule_date, patient_id, doctor_id });
        return schedule as Schedule;

    };

    async exists(schedule_date: Date, patient_id: number, doctor_id: number): Promise<boolean> {
        
        const schedules = await SchedulesModel.findAll({ 
            where: { 
                [Op.or]: [ { patient_id }, { doctor_id } ], 
                schedule_date: {
                    [Op.between]: [ new Date(schedule_date), new Date(new Date(schedule_date).setMinutes(new Date(schedule_date).getMinutes() + 15, 0, 0))]
                }
            },
        });

        return !!schedules.find((schedule) => schedule.status !== "Finalizado" && schedule.status !== "Cancelado");
    };

    async filterByPeriod(filterPeriod: WhereAttributeHashValue<ScheduleDate | Date>): Promise<Array<Schedule>> {

        const schedules = await SchedulesModel.findAll({ 
            include: {
                all: true
            },
            where: { 
                schedule_date: filterPeriod
            }
        });

        //@ts-ignore
        return schedules;
    };

    async filterByStatus(filterStatus: string): Promise<Array<Schedule>> {

        const schedules = await SchedulesModel.findAll({
            include: {
                all: true
            }, 
            where: { 
                status: filterStatus 
            }
        });

        //@ts-ignore
        return schedules;
    };

    async filterByDoctorAndPeriod(doctorName: string, period: any): Promise<Schedule[]> {
        
        const schedules = await SchedulesModel.findAll({ 
            include: {
                model: DoctorsModel,
                where: {
                    name: {
                        [Op.startsWith]: doctorName
                    }
                }
            },
            where: { 
                schedule_date: period
            }
        });

        //@ts-ignore
        return schedules;

    };

};

export { ScheduleRepositoryInDatabase };