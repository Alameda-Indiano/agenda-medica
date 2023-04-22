import { UsersModel } from "../../database/models/Users/UsersModel";
import { User } from "../../entities/User";

interface IUserRepository {
    create(user: User): Promise<User>;
    exists(email: string): Promise<UsersModel | null>;
};

export { IUserRepository };
