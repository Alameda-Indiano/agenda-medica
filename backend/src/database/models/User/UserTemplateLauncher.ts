import { DataTypes, Sequelize } from 'sequelize';
import { ITemplateLauncher } from '../IModels';
import { UserModel } from './UserModel';

const UserTemplateLauncher: ITemplateLauncher = {
    init: (sequelize: Sequelize) => {
        UserModel.init({
            id: {
                type: DataTypes.UUIDV4,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'users',
            name: {
                singular: 'user',
                plural: 'users'
            }
        });
    },
};

export { UserTemplateLauncher };