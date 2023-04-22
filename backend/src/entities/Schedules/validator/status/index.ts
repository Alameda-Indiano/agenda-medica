import { Either, error, sucess } from "../../../../shared/ErrorHandling/Either";
import { statuscode } from "../../../../shared/interfaces/StatusCode";
import { ParametersError } from "../../../../shared/ErrorHandling/ParametersError";
import { IStatusSchedule } from "../../interfaces";

class Status {

    private constructor(
        private readonly statusSchedule: IStatusSchedule | Status
    ){
        this.statusSchedule = statusSchedule;
        Object.freeze(this);
    };

    static create(statusSchedule: IStatusSchedule): Either<ParametersError, Status> {
        
        if (
            !!statusSchedule &&
            statusSchedule !== "Novo Agendamento" && 
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