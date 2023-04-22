import { UsersRepositoryInDatabase } from "../../repositories/Users/in-database/UsersRepositoryInDatabase";
import { IUserRepository } from "../../repositories/Users/IUsersRepositories";
import { GeneratorJwtService } from "../../shared/Services/GeneratorJwtService";

import { CreateUserService } from "./services/UserCreateService";
import { CreateUserController } from "./controllers/UserCreateController";

import { UserLoginService } from "./services/UserLoginService";
import { UserLoginController } from "./controllers/UserLoginController";

class UserModule {

    private userRepository: IUserRepository;
    private generatorJwtService: GeneratorJwtService;

    constructor() {
        this.userRepository = new UsersRepositoryInDatabase();
        this.generatorJwtService = new GeneratorJwtService();
    };

    public create() {
        const createUser = new CreateUserService(this.userRepository);
        const createUserController = new CreateUserController(createUser);
        return createUserController;
    };

    public login() {
        const userLogin = new UserLoginService(this.userRepository, this.generatorJwtService);
        const userLoginController = new UserLoginController(userLogin);
        return userLoginController;
    };

};

export const UserFactory = new UserModule();