type StatusParamsValue = 'Novo Agendamento' | 'Em Andamento' | 'Finalizado' | 'Cancelado';

interface ISchedulesByStatusParams {
    status: StatusParamsValue | any
};

export { ISchedulesByStatusParams, StatusParamsValue };