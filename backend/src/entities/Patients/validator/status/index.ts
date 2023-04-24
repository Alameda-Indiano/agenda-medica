import { Either, error, sucess } from "../../../../shared/ErrorHandling/Either";
import { statuscode } from "../../../../shared/interfaces/StatusCode";
import { ParametersError } from "../../../../shared/ErrorHandling/ParametersError";
import { IPatientStatus } from "../../interfaces";

class Status {

    private constructor(
        private readonly patientStatus: IPatientStatus | Status
    ){
        this.patientStatus = patientStatus;
        Object.freeze(this);
    };

    static create(patientStatus: IPatientStatus): Either<ParametersError, Status> {

        if (!!patientStatus && patientStatus !== "Ativo") return error(new ParametersError('The status reported to the patient is invalid', statuscode.BAD_REQUEST))
        else return sucess(new Status(patientStatus));

    };

    get value() {
        return this.patientStatus as Status;
    };

};

export { Status };