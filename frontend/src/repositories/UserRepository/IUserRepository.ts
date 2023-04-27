import { User } from "../../entities/User";
import { IUserLoginDTO } from "../../useCases/User/IUserDTOs/UserLogin/IUserLoginDTO";
import { IUserCreateResponseDTO } from "../../useCases/User/IUserDTOs/UserCreate/IUserCreateResponseDTO";
import { IUserLoginResponseDTO } from "../../useCases/User/IUserDTOs/UserLogin/IUserLoginResponseDTO";
import { IUserRequestResetPasswordDTO } from "../../useCases/User/IUserDTOs/UseResetPassword/IUserRequestResetPasswordDTO";
import { IUserResetPasswordDTO } from "../../useCases/User/IUserDTOs/UseResetPassword/IUserResetPasswordDTO";
import { IUserResetPasswordResponseDTO } from "../../useCases/User/IUserDTOs/UseResetPassword/IUseResetPasswordResponseDTO";
import { IUseRequestResetPasswordResponseDTO } from "../../useCases/User/IUserDTOs/UseResetPassword/IUseRequestResetPasswordResponseDTO";

export interface IUserRepository {

    create({ email, name, password }: User): Promise<IUserCreateResponseDTO>;
    login({ email, password }: IUserLoginDTO): Promise<IUserLoginResponseDTO>;
    reqResetPassWord({ email }: IUserRequestResetPasswordDTO): Promise<IUseRequestResetPasswordResponseDTO>;
    resetPassWord({ email, code, confirmPassword, password }: IUserResetPasswordDTO): Promise<IUserResetPasswordResponseDTO>;

};
