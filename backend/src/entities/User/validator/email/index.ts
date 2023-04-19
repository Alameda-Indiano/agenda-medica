import { Either, error, sucess } from "../../../../shared/either";
import { statuscode } from "../../../../shared/interfaces/StatusCode";
import { ParametersError } from "../../../../shared/ParametersError";
import { validateEmail } from "./validateEmail";

class Email {

    private readonly email: string;

    private constructor(email: string){
        this.email = email;
        Object.freeze(this);
    };

    static create(email: string): Either<ParametersError, Email> {

        if (!validateEmail(email)) return error( new ParametersError('Email does not follow the expected pattern!', statuscode.BAD_REQUEST) );

        return sucess( new Email(email) ) ;
    };

    get value() {
        return this.email;
    };

};

export { Email };