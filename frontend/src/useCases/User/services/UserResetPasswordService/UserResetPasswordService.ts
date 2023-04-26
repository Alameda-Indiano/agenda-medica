import { IUserRepository } from '../../../../repositories/UserRepository/IUserRepository';
import { IUserRequestResetPasswordDTO } from '../../IUserDTOs/UseResetPassword/IUserRequestResetPasswordDTO';
import { IUserResetPasswordDTO } from '../../IUserDTOs/UseResetPassword/IUserResetPasswordDTO';
import { IUseRequestResetPasswordResponseDTO } from '../../IUserDTOs/UseResetPassword/IUseRequestResetPasswordResponseDTO';
import { IUserResetPasswordResponseDTO } from '../../IUserDTOs/UseResetPassword/IUseResetPasswordResponseDTO';

export class UserResetPasswordService {

    private _responseRequest: IUseRequestResetPasswordResponseDTO | null;
    private _responseReset: IUserResetPasswordResponseDTO | null;

    constructor(
        private userRepository: IUserRepository
    ){
        this._responseRequest = null;
        this._responseReset = null;
    };

    public async request({ email }: IUserRequestResetPasswordDTO): Promise<IUseRequestResetPasswordResponseDTO> {

        try {
            
            const response = await this.userRepository.reqResetPassWord({ email });
            this._responseRequest = response;

        } catch (error) {
            console.error(error);
        };

        return this._responseRequest as IUseRequestResetPasswordResponseDTO;

    };

    public async resetPassword({ email, code, confirmPassword, password }: IUserResetPasswordDTO): Promise<IUserResetPasswordResponseDTO> {

        try {
            
            const response = await this.userRepository.resetPassWord({ email, code, confirmPassword, password });
            this._responseReset = response;

        } catch (error) {
            console.error(error);
        };

        return this._responseReset as IUserResetPasswordResponseDTO;

    };

};