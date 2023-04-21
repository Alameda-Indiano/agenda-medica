import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    Association,
    NonAttribute,
} from 'sequelize';
import { Age } from '../../../entities/Patients/validator/age/age';
import { Email } from '../../../entities/Patients/validator/email';
import { Name } from '../../../entities/Patients/validator/name';
import { Sex } from '../../../entities/Patients/validator/sex';
import { SchedulesModel } from '../Schedules/SchedulesModel';

class PatientsModel extends Model<InferAttributes<PatientsModel>, InferCreationAttributes<PatientsModel>> {

    declare id?: CreationOptional<number>;
    declare name: Name | string;
    declare email: Email | string;
    declare age: Age | Date;
    declare sex: Sex | 'Masculino' | 'Feminino';

    declare schedules?: NonAttribute<SchedulesModel[]>;

    declare static associations: {
        schedules: Association<PatientsModel, SchedulesModel>;
    };

};

export { PatientsModel };
