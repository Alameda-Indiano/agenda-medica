import { Either, error, sucess } from "../../../../shared/ErrorHandling/Either";
import { statuscode } from "../../../../shared/interfaces/StatusCode";
import { ParametersError } from "../../../../shared/ErrorHandling/ParametersError";
import { UserFullNameValidate } from "../../../../shared/utils/UserFullNameValidate";

class Name {

    private constructor(
        private readonly name: string | Name
    ){
        this.name = name;
        Object.freeze(this);
    };

    static create(name: string): Either<ParametersError, Name> {

        if (name.trim().length === 0) return error(new ParametersError('User name is required', statuscode.BAD_REQUEST))
        else if (!UserFullNameValidate(name)) return error(new ParametersError('You must enter the user full name', statuscode.BAD_REQUEST))
        else return sucess(new Name(name));

    };

    get value() {
        return this.name as Name;
    };

};

export { Name };