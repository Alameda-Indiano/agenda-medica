import { User } from "../../entities/User";

interface IUserRepository {
    create(user: User): Promise<User>;
    exists(email: string): Promise<boolean>;
};

export { IUserRepository };
