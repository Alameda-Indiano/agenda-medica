import { Either, error, sucess } from "../../shared/ErrorHandling/Either";
import { ParametersError } from "../../shared/ErrorHandling/ParametersError";
import { Email } from "./validator/email";
import { Name } from "./validator/name";
import { Password } from "./validator/password";

export interface IDataUser {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

class User {
    
    public readonly id?: number;

    public name: Name;
    public email: Email;
    public password: Password;

    private constructor({ email, name, password }: Omit<User, 'id'>) {
        this.email = email;
        this.password = password;
        this.name = name;
    };

    static create(dataUser: IDataUser): Either<ParametersError, User> {

        const name = Name.create(dataUser.name);
        const email = Email.create(dataUser.email); 
        const password = Password.create(dataUser.password, dataUser.confirmPassword);

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