import { UsersModel } from "../../../database/models/Users/UsersModel";
import { User } from "../../../entities/User";
import { IUserRepository } from "../IUsersRepositories";

class UsersRepositoryInDatabase implements IUserRepository {

    async create({ name, email, password }: User): Promise<User> {
        const user = await UsersModel.create({ name, email, password });
        return user as User;
    };

    async exists(email: string): Promise<UsersModel | null> {
        const user = await UsersModel.findOne({ where: { email } });
        return user;
    };

};

export { UsersRepositoryInDatabase };