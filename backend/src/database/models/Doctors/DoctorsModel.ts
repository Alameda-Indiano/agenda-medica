import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    NonAttribute,
    Association,
} from 'sequelize';
import { SchedulesModel } from '../Schedules/SchedulesModel';

class DoctorsModel extends Model<InferAttributes<DoctorsModel>, InferCreationAttributes<DoctorsModel>> {

    declare id?: CreationOptional<string>;
    declare name: string;
    declare email: string;

    declare schedules?: NonAttribute<SchedulesModel[]>;

    declare static associations: {
        schedules: Association<DoctorsModel, SchedulesModel>;
    };

};

export { DoctorsModel };
