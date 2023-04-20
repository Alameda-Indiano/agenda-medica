import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    Association,
    NonAttribute,
} from 'sequelize';
import { SchedulesModel } from '../Schedules/SchedulesModel';

class PatientsModel extends Model<InferAttributes<PatientsModel>, InferCreationAttributes<PatientsModel>> {

    declare id?: CreationOptional<string>;
    declare name: string;
    declare email: string;
    declare age: Date;
    declare sex: 'Masculino' | 'Feminino';

    declare schedules?: NonAttribute<SchedulesModel[]>;

    declare static associations: {
        schedules: Association<PatientsModel, SchedulesModel>;
    };

};

export { PatientsModel };
