import { Either, error, sucess } from "../../../../shared/ErrorHandling/Either";
import { statuscode } from "../../../../shared/interfaces/StatusCode";
import { ParametersError } from "../../../../shared/ErrorHandling/ParametersError";

type IStatusSchedule = 'Agendado' | 'Em Andamento' | 'Finalizado' | 'Cancelado';

class Status {

    private constructor(
        private readonly statusSchedule: IStatusSchedule | Status
    ){
        this.statusSchedule = statusSchedule;
        Object.freeze(this);
    };

    static create(statusSchedule: IStatusSchedule): Either<ParametersError, Status> {

        if (statusSchedule.trim().length === 0) return error(new ParametersError('It is necessary to inform the schedule status', statuscode.BAD_REQUEST))
        
        else if (
            statusSchedule !== "Agendado" && 
            statusSchedule !== "Em Andamento" && 
            statusSchedule !== "Finalizado" && 
            statusSchedule !== "Cancelado" 
        ) return error(new ParametersError('The reported status is invalid', statuscode.BAD_REQUEST))

        else return sucess(new Status(statusSchedule));

    };

    get value() {
        return this.statusSchedule as Status;
    };

};

export { Status };