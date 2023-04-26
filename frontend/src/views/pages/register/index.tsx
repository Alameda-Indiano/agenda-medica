import { FC, useState } from "react";
import { AlignItemsCenter } from "../../assets/styles/AlignItemsCenter";
import { BannerBackground } from "../../assets/styles/BannerBackground";
import { Section } from "../../assets/styles/Section";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import LoginImage from '../../assets/images/login_image.png';
import { Inputs } from "../../assets/styles/Inputs";
import { Button } from "../../components/Button";
import { FooterForm } from "../../assets/styles/FooterForm";
import { IUserCreateDTO } from "../../../useCases/User/IUserDTOs/UserCreate/IUserCreateDTO";
import { UserCreateService } from "../../../useCases/User/services/UserCreateService/UserCreateService";
import { UsersRepositoryInDatabase } from "../../../repositories/UserRepository/in-database/UsersRepositoryInDatabase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Register: FC = () => {
    
    const userRepository = new UsersRepositoryInDatabase();
    const userCreateService = new UserCreateService(userRepository);

    const navigate = useNavigate();

    const initialDataUser: IUserCreateDTO = {
        confirmPassword: '',
        email: '',
        name: '',
        password: ''
    };

    const [ dataUser, setDataUser ] = useState<IUserCreateDTO>(initialDataUser);

    const createUser = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        
        const { confirmPassword, email, name, password } = dataUser;

        const { data: { message, statusCode } } = await userCreateService.create({ confirmPassword, email, name, password });

        if (statusCode === 201) {
            alert(message);
            setDataUser(initialDataUser);
            navigate('/login');
        };

    };

    return (
       <BannerBackground ViewHeight={100} >
            <Header />
            <Section>
                <AlignItemsCenter>
                    <Form img={LoginImage} title="Cadastrar-se" >
                        <Inputs type="text" value={dataUser.name} onChange={(e) => setDataUser({ ...dataUser, name: e.target.value })} placeholder="Nome" />
                        <Inputs type="text" value={dataUser.email} onChange={(e) => setDataUser({ ...dataUser, email: e.target.value })} placeholder="Email" />
                        <Inputs type="text" value={dataUser.password} onChange={(e) => setDataUser({ ...dataUser, password: e.target.value })} placeholder="Senha" />
                        <Inputs type="text" value={dataUser.confirmPassword} onChange={(e) => setDataUser({ ...dataUser, confirmPassword: e.target.value })} placeholder="Confirmar senha" />
                        <Button width="90%" eventClick={createUser} >Enviar</Button>
                        <FooterForm>
                            <Link to={'/login'} >Realizar login</Link>
                        </FooterForm>
                    </Form>
                </AlignItemsCenter>
            </Section>
       </BannerBackground>
    )

};