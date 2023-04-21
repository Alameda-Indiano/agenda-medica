import { Either, error, sucess } from "../../../../shared/ErrorHandling/Either";
import { statuscode } from "../../../../shared/interfaces/StatusCode";
import { ParametersError } from "../../../../shared/ErrorHandling/ParametersError";

type IPatientSex = 'Masculino' | 'Feminino'; 

class Sex {

    private constructor(
        private readonly patientSex: IPatientSex | Sex
    ){
        this.patientSex = patientSex;
        Object.freeze(this);
    };

    static create(patientSex: IPatientSex): Either<ParametersError, Sex> {

        if (patientSex.trim().length === 0) return error(new ParametersError('It is necessary to inform the sex of the patient', statuscode.BAD_REQUEST))
        else if (patientSex !== "Masculino" && patientSex !== "Feminino") return error(new ParametersError('The sex reported to the patient is invalid', statuscode.BAD_REQUEST))
        else return sucess(new Sex(patientSex));

    };

    get value() {
        return this.patientSex as Sex;
    };

};

export { Sex };