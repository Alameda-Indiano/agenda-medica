import { User } from "../../../entities/User";
import { IUserRepository } from "../IUserRepository";
import { connectionAPI } from '../../../database/axios';
import { IUserCreateResponseDTO } from "../../../useCases/User/IUserDTOs/UserCreate/IUserCreateResponseDTO";
import { IUserLoginDTO } from "../../../useCases/User/IUserDTOs/UserLogin/IUserLoginDTO";
import { IUserLoginResponseDTO } from "../../../useCases/User/IUserDTOs/UserLogin/IUserLoginResponseDTO";
import { IUserRequestResetPasswordDTO } from "../../../useCases/User/IUserDTOs/UseResetPassword/IUserRequestResetPasswordDTO";
import { IUserResetPasswordDTO } from "../../../useCases/User/IUserDTOs/UseResetPassword/IUserResetPasswordDTO";
import { IUseRequestResetPasswordResponseDTO } from "../../../useCases/User/IUserDTOs/UseResetPassword/IUseRequestResetPasswordResponseDTO";
import { IUserResetPasswordResponseDTO } from "../../../useCases/User/IUserDTOs/UseResetPassword/IUseResetPasswordResponseDTO";

class UsersRepositoryInDatabase implements IUserRepository {

    public async create({ name, email, password }: User): Promise<IUserCreateResponseDTO> {

        const response: IUserCreateResponseDTO = await connectionAPI.post('/User/Create', { name, email, password });
        return response;
        
    };

    public async login({ email, password }: IUserLoginDTO): Promise<IUserLoginResponseDTO> {
        
        const response: IUserLoginResponseDTO = await connectionAPI.post('/User/Login', { email, password });
        return response;

    };

    public async reqResetPassWord({ email }: IUserRequestResetPasswordDTO): Promise<IUseRequestResetPasswordResponseDTO> {
        
        const response: IUseRequestResetPasswordResponseDTO = await connectionAPI.post('/User/PasswordResetRequest', { email });
        return response;

    };

    public async resetPassWord({ email, code, confirmPassword, password }: IUserResetPasswordDTO): Promise<IUserResetPasswordResponseDTO> {
        
        const response: IUserResetPasswordResponseDTO = await connectionAPI.post('/User/ResetPassword', { email, code, confirmPassword, password });
        return response;

    };

};

export { UsersRepositoryInDatabase };