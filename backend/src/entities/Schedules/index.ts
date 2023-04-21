import { Either, error, sucess } from "../../shared/ErrorHandling/Either";
import { ParametersError } from "../../shared/ErrorHandling/ParametersError";
import { ScheduleDate } from "./validator/scheduleDate";
import { Name } from "./validator/name";
import { Status } from "./validator/status";

export interface IDataSchedule {
    name: string;
    schedule_date: Date;
    status: 'Agendado' | 'Em Andamento' | 'Finalizado' | 'Cancelado';
    patient_id: number;
    doctor_id: number;
};

class Schedule {
    
    public readonly id?: number;

    public declare name: Name;
    public declare status: Status;
    public declare schedule_date: ScheduleDate;
    public declare patient_id: number;
    public declare doctor_id: number;

    private constructor(props: Omit<Schedule, 'id'>, id?: number) {
        return Object.assign(this, props);
    };

    static create(dataSchedule: IDataSchedule): Either<ParametersError, Schedule> {

        const name = Name.create(dataSchedule.name);
        const scheduleDate = ScheduleDate.create(dataSchedule.schedule_date); 
        const status = Status.create(dataSchedule.status); 

        if (name.isException()) return error( name.exception );
        if (scheduleDate.isException()) return error( scheduleDate.exception );
        if (status.isException()) return error( status.exception );

        const doctor = new Schedule({ 
            name: name.sucess.value, 
            status: status.sucess.value,
            schedule_date: scheduleDate.sucess.value,
            doctor_id:  dataSchedule.doctor_id,
            patient_id: dataSchedule.patient_id
        });

        return sucess(doctor);
    };

};

export { Schedule };