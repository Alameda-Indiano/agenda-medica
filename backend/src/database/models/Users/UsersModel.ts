import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
} from 'sequelize';

import { Email } from '../../../entities/User/validator/email';
import { Name } from '../../../entities/User/validator/name';
import { Password } from '../../../entities/User/validator/password';

class UsersModel extends Model<InferAttributes<UsersModel>, InferCreationAttributes<UsersModel>> {

    declare id?: CreationOptional<number>;
    declare name: Name | string;
    declare email: Email | string;
    declare password: Password | string;

};

export { UsersModel };
