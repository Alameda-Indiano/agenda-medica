import { DataTypes, Sequelize } from 'sequelize';
import { ITemplateLauncher } from '../IModels';
import { IModels } from '../Models';
import { SchedulesModel } from './SchedulesModel';

const SchedulesTemplateLauncher: ITemplateLauncher = {
    init: (sequelize: Sequelize) => {
        SchedulesModel.init({
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
            schedule_date: {
                type: DataTypes.DATE,
                allowNull: false
            },
            status: {
                type: DataTypes.ENUM('Agendado', 'Em Andamento', 'Finalizado', 'Cancelado'),
                allowNull: false
            },
            patient_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: { 
                    model: 'patients',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            doctor_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: { 
                    model: 'doctors',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
        }, {
            sequelize,
            modelName: 'schedules',
            name: {
                singular: 'schedule',
                plural: 'schedules'
            }
        });
    },
    associate(models: Omit<IModels, 'schedules'>) {
        
        SchedulesModel.belongsTo(models.patients, {
            foreignKey: 'patient_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        });
        SchedulesModel.belongsTo(models.doctors, {
            foreignKey: 'doctor_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        });

    },
};

export { SchedulesTemplateLauncher };