interface ICreateScheduleDTO {
    name: string;
    schedule_date: Date;
    status: 'Novo Agendamento' | 'Em Andamento' | 'Finalizado' | 'Cancelado';
    patient_id: number;
    doctor_id: number;
};

export {
    ICreateScheduleDTO
};