import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    NonAttribute,
    Association,
} from 'sequelize';
import { Email } from '../../../entities/Doctors/validator/email';
import { Name } from '../../../entities/Doctors/validator/name';
import { SchedulesModel } from '../Schedules/SchedulesModel';

class DoctorsModel extends Model<InferAttributes<DoctorsModel>, InferCreationAttributes<DoctorsModel>> {

    declare id?: CreationOptional<string>;
    declare name: Name | string;
    declare email: Email | string;

    declare schedules?: NonAttribute<SchedulesModel[]>;

    declare static associations: {
        schedules: Association<DoctorsModel, SchedulesModel>;
    };

};

export { DoctorsModel };
