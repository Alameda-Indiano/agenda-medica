import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
} from 'sequelize';

class UsersModel extends Model<InferAttributes<UsersModel>, InferCreationAttributes<UsersModel>> {

    declare id?: CreationOptional<string>;
    declare name: string;
    declare email: string;
    declare password: string;

};

export { UsersModel };
