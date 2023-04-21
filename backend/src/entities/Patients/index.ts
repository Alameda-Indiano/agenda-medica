import { Either, error, sucess } from "../../shared/ErrorHandling/Either";
import { ParametersError } from "../../shared/ErrorHandling/ParametersError";
import { Age } from "./validator/age/age";
import { Email } from "./validator/email";
import { Name } from "./validator/name";
import { Sex } from "./validator/sex";

export interface IDataPatient {
    name: string;
    email: string;
    age: Date;
    sex: 'Masculino' | 'Feminino';
};

class Patient {
    
    public readonly id?: string;

    public declare name: Name;
    public declare email: Email;
    public declare age: Age;
    public declare sex: Sex;

    private constructor(props: Omit<Patient, 'id'>, id?: string) {
        return Object.assign(this, props);
    };

    static create(dataPatient: IDataPatient): Either<ParametersError, Patient> {

        const name = Name.create(dataPatient.name);
        const email = Email.create(dataPatient.email); 
        const age = Age.create(dataPatient.age); 
        const sex = Sex.create(dataPatient.sex); 

        if (name.isException()) return error( name.exception );
        if (email.isException()) return error( email.exception );
        if (age.isException()) return error( age.exception );
        if (sex.isException()) return error( sex.exception );

        const patient = new Patient({ 
            name: name.sucess.value, 
            email: email.sucess.value, 
            age: age.sucess.value, 
            sex: sex.sucess.value, 
        });

        return sucess(patient);
    };

};

export { Patient };