import { Either, error, sucess } from "../../../../shared/either";
import { statuscode } from "../../../../shared/interfaces/StatusCode";
import { ParametersError } from "../../../../shared/ParametersError";
import { PasswordValidate } from "../../../../utils/PasswordValidate";

class Password {

    private constructor(
        private readonly password: string | Password
    ){
        this.password = password;
        Object.freeze(this);
    };

    static create(password: string): Either<ParametersError,Password> {

        if (password.trim().length === 0) return error(new ParametersError('Password is required!', statuscode.BAD_REQUEST));
        else if (!PasswordValidate(password)) return error(new ParametersError('The password does not follow the expected pattern! (One number, one capital letter & one special character)', statuscode.BAD_REQUEST));
        else return sucess(new Password(password));

    };

    get value() {
        return this.password as Password;
    };

};

export { Password };