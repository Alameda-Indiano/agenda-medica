import { UsersRepositoryInDatabase } from "../../repositories/Users/in-database/UsersRepositoryInDatabase";
import { IUserRepository } from "../../repositories/Users/IUsersRepositories";
import { GeneratorJwtService } from "../../shared/Services/GeneratorJwtService";
import { GeneratorCodeService } from "../../shared/Services/GeneratorCodeService";

import { CreateUserService } from "./services/UserCreateService";
import { CreateUserController } from "./controllers/UserCreateController";

import { UserLoginService } from "./services/UserLoginService";
import { UserLoginController } from "./controllers/UserLoginController";

import { UserReqCodeResetPasswordService } from "./services/UserReqCodeResetPasswordService";
import { UserReqCodeResetPasswordController } from "./controllers/UserReqCodeResetPasswordController";

import { UserResetPasswordService } from "./services/UserResetPasswordService";
import { UserResetPasswordController } from "./controllers/UserResetPasswordController";

class UserModule {

    private userRepository: IUserRepository;
    private generatorJwtService: GeneratorJwtService;
    private generatorCodeService: GeneratorCodeService;

    constructor() {
        this.userRepository = new UsersRepositoryInDatabase();
        this.generatorJwtService = new GeneratorJwtService();
        this.generatorCodeService = new GeneratorCodeService();
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
        const userReqCodeResetPasswordService = new UserReqCodeResetPasswordService(this.userRepository, this.generatorCodeService);
        const userReqCodeResetPasswordController = new UserReqCodeResetPasswordController(userReqCodeResetPasswordService);
        return userReqCodeResetPasswordController;
    };

    public resetPassword() {
        const userResetPasswordService = new UserResetPasswordService(this.userRepository, this.generatorJwtService);
        const userResetPasswordController = new UserResetPasswordController(userResetPasswordService);
        return userResetPasswordController;
    };

};

export const UserFactory = new UserModule();