import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    NonAttribute,
    Association,
} from 'sequelize';
import { DoctorsModel } from '../Doctors/DoctorsModel';
import { PatientsModel } from '../Patients/PatientsModel';

class SchedulesModel extends Model<InferAttributes<SchedulesModel>, InferCreationAttributes<SchedulesModel>> {

    declare id?: CreationOptional<string>;
    declare name: string;
    declare schedule_date: Date;
    declare status: 'Agendado' | 'Em Andamento' | 'Finalizado' | 'Cancelado';

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
