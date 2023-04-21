import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
} from 'sequelize';
import { Email } from '../../../entities/User/validator/email';

class UsersModel extends Model<InferAttributes<UsersModel>, InferCreationAttributes<UsersModel>> {

    declare id?: CreationOptional<string>;
    declare name: string;
    declare email: Email | string;
    declare password: string;

};

export { UsersModel };
