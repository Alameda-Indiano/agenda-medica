import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
} from 'sequelize';

class UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {

    declare id?: CreationOptional<string>;
    declare name: string;
    declare email: string;
    declare password: string;

};

export { UserModel };
