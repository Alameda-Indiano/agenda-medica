import { UsersRepositoryInDatabase } from "../../repositories/Users/in-database/UsersRepositoryInDatabase";
import { IUserRepository } from "../../repositories/Users/IUsersRepositories";
import { CreateUserController } from "./controllers/UserCreateController";
import { CreateUserService } from "./services/UserCreateService";

class UserModule {

    private userRepository: IUserRepository;

    constructor() {
        this.userRepository = new UsersRepositoryInDatabase();
    };

    public create() {
        const createUser = new CreateUserService(this.userRepository);
        const createUserController = new CreateUserController(createUser);
        return createUserController;
    };

};

export const UserFactory = new UserModule();