import { Either, error, sucess } from "../../../../shared/ErrorHandling/Either";
import { statuscode } from "../../../../shared/interfaces/StatusCode";
import { ParametersError } from "../../../../shared/ErrorHandling/ParametersError";

class Name {

    private constructor(
        private readonly name: string | Name
    ){
        this.name = name;
        Object.freeze(this);
    };

    static create(name: string): Either<ParametersError, Name> {

        if (name.trim().length === 0) return error(new ParametersError('Doctor name is required', statuscode.BAD_REQUEST))
        else return sucess(new Name(name));

    };

    get value() {
        return this.name as Name;
    };

};

export { Name };