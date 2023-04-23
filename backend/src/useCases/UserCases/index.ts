import { UsersRepositoryInDatabase } from "../../repositories/Users/in-database/UsersRepositoryInDatabase";
import { IUserRepository } from "../../repositories/Users/IUsersRepositories";
import { GeneratorJwtService } from "../../shared/Services/GeneratorJwtService";
import { GeneratorcCodeService } from "../../shared/Services/GeneratorcCodeService";

import { CreateUserService } from "./services/UserCreateService";
import { CreateUserController } from "./controllers/UserCreateController";

import { UserLoginService } from "./services/UserLoginService";
import { UserLoginController } from "./controllers/UserLoginController";

import { UserCodeResetPassworService } from "./services/UserCodeResetPassworService";
import { UserCodeResetPassworController } from "./controllers/UserCodeResetPassworController";

class UserModule {

    private userRepository: IUserRepository;
    private generatorJwtService: GeneratorJwtService;
    private generatorcCodeService: GeneratorcCodeService;

    constructor() {
        this.userRepository = new UsersRepositoryInDatabase();
        this.generatorJwtService = new GeneratorJwtService();
        this.generatorcCodeService = new GeneratorcCodeService();
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

    public passwordResetRequest() {
        const userCodeResetPassworService = new UserCodeResetPassworService(this.userRepository, this.generatorcCodeService);
        const userCodeResetPassworController = new UserCodeResetPassworController(userCodeResetPassworService);
        return userCodeResetPassworController;
    };

};

export const UserFactory = new UserModule();