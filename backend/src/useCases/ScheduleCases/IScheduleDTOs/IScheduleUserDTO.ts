interface ICreateScheduleDTO {
    name: string;
    schedule_date: Date;
    status: 'Agendado' | 'Em Andamento' | 'Finalizado' | 'Cancelado';
    patient_id: string;
    doctor_id: string;
};

export {
    ICreateScheduleDTO
};