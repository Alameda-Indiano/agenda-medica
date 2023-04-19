import { UserModel } from "../../../database/models/User/UserModel";
import { User } from "../../../entities/User";
import { IUserRepository } from "../IUsersRepositories";

class UsersRepositoryInDatabase implements IUserRepository {

    async create({ name, email, password, username }: User): Promise<User> {
        const user = await UserModel.create({ name, email, password, username });
        return user;
    };

    async exists(email: string): Promise<boolean> {
        const user = await UserModel.findOne({ where: { email } });
        return !!user;
    };

};

export { UsersRepositoryInDatabase };