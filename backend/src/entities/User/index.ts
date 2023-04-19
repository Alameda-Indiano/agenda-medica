import { Either, error, sucess } from "../../shared/either";
import { ParametersError } from "../../shared/ParametersError";
import { Email } from "./validator/email";

export interface IDataUser {
    name: string;
    email: string;
    password: string;
    username: string;
};

class User {
    
    public readonly id?: string;

    public declare name: string;
    public declare email: Email;
    public declare password: string;
    public declare username: string;

    private constructor(props: Omit<User, 'id'>, id?: string) {
        return Object.assign(this, props);
    };

    static create(dataUser: IDataUser): Either<ParametersError, User> {

        const email = Email.create(dataUser.email); 
        const name = dataUser.name;
        const password = dataUser.password;
        const username = dataUser.username;

        if (email.isException()) return error( email.exception );

        const user = new User({ name, email: email.sucess.value, password, username });

        return sucess(user);
    };

};

export { User };