import { DataTypes, Sequelize } from 'sequelize';
import { ITemplateLauncher } from '../IModels';
import { IModels } from '../Models';
import { PatientsModel } from './PatientsModel';

const PatientsTemplateLauncher: ITemplateLauncher = {
    init: (sequelize: Sequelize) => {
        PatientsModel.init({
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
            age: {
                type: DataTypes.DATE,
                allowNull: false
            },
            sex: {
                type: DataTypes.ENUM('Masculino', 'Feminino'),
                allowNull: false
            },
            status: {
                type: DataTypes.ENUM('Ativo', 'Inativo'),
                defaultValue: 'Ativo'
            }
        }, {
            sequelize,
            modelName: 'patients',
            name: {
                singular: 'patient',
                plural: 'patients'
            }
        });
    },
    associate(models: Omit<IModels, 'patients'>) {
        
        PatientsModel.hasMany(models.schedules);

    },
};

export { PatientsTemplateLauncher };