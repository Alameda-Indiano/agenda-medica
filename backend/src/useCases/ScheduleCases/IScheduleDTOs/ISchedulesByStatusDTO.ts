import { Schedule } from "../../../entities/Schedules";

interface ISchedulesByStatusDTO { 
    schedules: Array<Schedule>, 
    total_schedules: number 
};

type StatusParamsValue = 'Novo Agendamento' | 'Em Andamento' | 'Finalizado' | 'Cancelado';

interface ISchedulesByStatusParams {
    status: StatusParamsValue | any
};

export { ISchedulesByStatusDTO, ISchedulesByStatusParams, StatusParamsValue };