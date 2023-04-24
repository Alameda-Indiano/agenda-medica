import { Either, error, sucess } from "../../shared/ErrorHandling/Either";
import { ParametersError } from "../../shared/ErrorHandling/ParametersError";
import { Email } from "./validator/email";
import { Name } from "./validator/name";

export interface IDataDoctor {
    name: string;
    email: string;
};

class Doctor {
    
    public readonly id?: number;

    public declare name: Name;
    public declare email: Email;

    private constructor(props: Omit<Doctor, 'id'>, id?: number) {
        return Object.assign(this, props);
    };

    static create(dataDoctor: IDataDoctor): Either<ParametersError, Doctor> {

        const name = Name.create(dataDoctor.name);
        const email = Email.create(dataDoctor.email); 

        if (name.isException()) return error( name.exception );
        if (email.isException()) return error( email.exception );

        const doctor = new Doctor({ 
            name: name.sucess.value, 
            email: email.sucess.value, 
        });

        return sucess(doctor);
    };

};

export { Doctor };