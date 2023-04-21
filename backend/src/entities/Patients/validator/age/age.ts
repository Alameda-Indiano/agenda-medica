import { Either, error, sucess } from "../../../../shared/ErrorHandling/Either";
import { statuscode } from "../../../../shared/interfaces/StatusCode";
import { ParametersError } from "../../../../shared/ErrorHandling/ParametersError";

class Age {

    private constructor(
        private readonly userAge: Date | Age
    ){
        this.userAge = userAge;
        Object.freeze(this);
    };

    static create(userAge: Date): Either<ParametersError, Age> {

        const currentDate = new Date();

        if (!userAge) return error(new ParametersError('Age patient is required', statuscode.BAD_REQUEST))
        else if (new Date(userAge) > currentDate) return error(new ParametersError('Age patient invalid!', statuscode.BAD_REQUEST))
        else return sucess(new Age(userAge));

    };

    get value() {
        return this.userAge as Age;
    };

};

export { Age };