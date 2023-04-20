import { DataTypes, Sequelize } from 'sequelize';
import { ITemplateLauncher } from '../IModels';
import { IModels } from '../Models';
import { DoctorsModel } from './DoctorsModel';

const DoctorsTemplateLauncher: ITemplateLauncher = {
    init: (sequelize: Sequelize) => {
        DoctorsModel.init({
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
            }
        }, {
            sequelize,
            modelName: 'doctors',
            name: {
                singular: 'doctor',
                plural: 'doctors'
            }
        });
    },
    associate(models: Omit<IModels, 'doctors'>) {
        
        DoctorsModel.hasMany(models.schedules)

    },
};

export { DoctorsTemplateLauncher };