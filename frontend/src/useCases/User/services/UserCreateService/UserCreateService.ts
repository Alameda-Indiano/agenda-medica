import { IUserRepository } from '../../../../repositories/UserRepository/IUserRepository';
import { IUserCreateDTO } from '../../IUserDTOs/UserCreate/IUserCreateDTO';
import { User } from '../../../../entities/User';
import { IUserCreateResponseDTO } from '../../IUserDTOs/UserCreate/IUserCreateResponseDTO';

export class UserCreateService {

    private _response: IUserCreateResponseDTO | null;

    constructor(
        private userRepository: IUserRepository
    ){
        this._response = null;
    };

    public async create({ email, name, password, confirmPassword }: IUserCreateDTO): Promise<IUserCreateResponseDTO> {

        const response = User.create({ email, name, password, confirmPassword });

        if (response.isException()) alert(response.exception.message);

        if (response.isSucess()) {

            const { email, name, password } = response.sucess;

            try {
                
                const newUser = await this.userRepository.create({ email, name, password });
                this._response = newUser;

            } catch (error) {
                console.error(error);
            };

        };

        return this._response as IUserCreateResponseDTO;

    };

};