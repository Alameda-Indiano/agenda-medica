import { Either, error, sucess } from "../../shared/ErrorHandling/Either";
import { ParametersError } from "../../shared/ErrorHandling/ParametersError";
import { Email } from "./validator/email";
import { Name } from "./validator/name";
import { Password } from "./validator/password";

export interface IDataUser {
    name: string;
    email: string;
    password: string;
};

class User {
    
    public readonly id?: string;

    public declare name: Name;
    public declare email: Email;
    public declare password: Password;

    private constructor(props: Omit<User, 'id'>, id?: string) {
        return Object.assign(this, props);
    };

    static create(dataUser: IDataUser): Either<ParametersError, User> {

        const name = Name.create(dataUser.name);
        const email = Email.create(dataUser.email); 
        const password = Password.create(dataUser.password);

        if (name.isException()) return error( name.exception );
        if (email.isException()) return error( email.exception );
        if (password.isException()) return error( password.exception );

        const user = new User({ 
            name: name.sucess.value, 
            email: email.sucess.value, 
            password: password.sucess.value 
        });

        return sucess(user);
    };

};

export { User };