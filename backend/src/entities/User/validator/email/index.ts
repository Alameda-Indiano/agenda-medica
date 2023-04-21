import { Either, error, sucess } from "../../../../shared/either";
import { statuscode } from "../../../../shared/interfaces/StatusCode";
import { ParametersError } from "../../../../shared/ParametersError";
import { EmailValidate } from "../../../../utils/EmailValidate";

class Email {

    private constructor(
        private readonly email: string | Email
    ){
        this.email = email;
        Object.freeze(this);
    };

    static create(email: string): Either<ParametersError, Email> {

        if (!EmailValidate(email)) return error( new ParametersError('Email does not follow the expected pattern!', statuscode.BAD_REQUEST) );
        else return sucess( new Email(email) );
    };

    get value() {
        return this.email as Email;
    };

};

export { Email };