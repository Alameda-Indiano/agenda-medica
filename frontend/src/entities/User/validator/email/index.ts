import { Either, error, sucess } from "../../../../shared/ErrorHandling/Either";
import { ParametersError } from "../../../../shared/ErrorHandling/ParametersError";
import { EmailValidate } from "../../../../shared/utils/EmailValidate";

class Email {

    private constructor(
        private readonly email: string | Email
    ){
        this.email = email;
        Object.freeze(this);
    };

    static create(email: string): Either<ParametersError, Email> {

        if (!EmailValidate(email)) return error( new ParametersError('O e-mail não segue o padrão esperado!') );
        else return sucess( new Email(email) );
    };

    get value() {
        return this.email as Email;
    };

};

export { Email };