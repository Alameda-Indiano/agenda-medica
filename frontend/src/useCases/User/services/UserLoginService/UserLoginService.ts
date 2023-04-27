import { IUserRepository } from '../../../../repositories/UserRepository/IUserRepository';
import { IUserLoginDTO } from '../../IUserDTOs/UserLogin/IUserLoginDTO';
import { IUserLoginResponseDTO } from '../../IUserDTOs/UserLogin/IUserLoginResponseDTO';

export class UserLoginService {

    private _response: IUserLoginResponseDTO | null;

    constructor(
        private userRepository: IUserRepository
    ){
        this._response = null;
    };

    public async login({ email, password }: IUserLoginDTO): Promise<IUserLoginResponseDTO> {

        try {
            
            const userLogin = await this.userRepository.login({ email, password });
            this._response = userLogin;

        } catch (error) {
            console.error(error);
        };

        return this._response as IUserLoginResponseDTO;

    };

};