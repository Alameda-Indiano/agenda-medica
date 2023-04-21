import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    NonAttribute,
    Association,
} from 'sequelize';
import { Name } from '../../../entities/Schedules/validator/name';
import { ScheduleDate } from '../../../entities/Schedules/validator/scheduleDate';
import { Status } from '../../../entities/Schedules/validator/status';
import { DoctorsModel } from '../Doctors/DoctorsModel';
import { PatientsModel } from '../Patients/PatientsModel';

class SchedulesModel extends Model<InferAttributes<SchedulesModel>, InferCreationAttributes<SchedulesModel>> {

    declare id?: CreationOptional<number>;
    declare name: Name | string;
    declare schedule_date: ScheduleDate | Date;
    declare status: Status | 'Agendado' | 'Em Andamento' | 'Finalizado' | 'Cancelado';

    declare patient_id: number;
    declare doctor_id: number;

    declare patients?: NonAttribute<PatientsModel>;
    declare doctors?: NonAttribute<DoctorsModel>;

    declare static associations: {
        patients: Association<SchedulesModel, PatientsModel>;
        doctors: Association<SchedulesModel, DoctorsModel>;
    };

};

export { SchedulesModel };
