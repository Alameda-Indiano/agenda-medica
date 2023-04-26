import { FC, useState } from "react";
import { AlignItemsCenter } from "../../assets/styles/AlignItemsCenter";
import { BannerBackground } from "../../assets/styles/BannerBackground";
import LoginImage from '../../assets/images/login_image.png';
import { Section } from "../../assets/styles/Section";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { Inputs } from "../../assets/styles/Inputs";
import { Button } from "../../components/Button";
import { FooterForm } from "../../assets/styles/FooterForm";
import { IUserLoginDTO } from "../../../useCases/User/IUserDTOs/UserLogin/IUserLoginDTO";
import { UserLoginService } from "../../../useCases/User/services/UserLoginService/UserLoginService";
import { UsersRepositoryInDatabase } from "../../../repositories/UserRepository/in-database/UsersRepositoryInDatabase";

export const Login: FC = () => {

    const userRepository = new UsersRepositoryInDatabase();
    const userLoginService = new UserLoginService(userRepository);

    const initialDataUser: IUserLoginDTO = {
        email: '',
        password: ''
    };

    const [ dataUser, setDataUser ] = useState<IUserLoginDTO>(initialDataUser);

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        const { data: { message, statusCode, value } } = await userLoginService.login({ email: dataUser.email, password: dataUser.password });

        if (statusCode === 200) {
            alert(message);
            setDataUser(initialDataUser);
        };

    };

    return (
       <BannerBackground ViewHeight={100} >
            <Header />
            <Section>
                <AlignItemsCenter>
                    <Form img={LoginImage} title="Realizar login" >
                        <Inputs type="text" value={dataUser.email} onChange={(e) => setDataUser({ ...dataUser, email: e.target.value })} placeholder="Email" />
                        <Inputs type="text" value={dataUser.password} onChange={(e) => setDataUser({ ...dataUser, password: e.target.value })} placeholder="Senha" />
                        <Button width="90%" eventClick={handleLogin} >Enviar</Button>
                        <FooterForm>
                            <a href="">Redefinir senha</a>
                            <a href="">Cadastre-se</a>
                        </FooterForm>
                    </Form>
                </AlignItemsCenter>
            </Section>
       </BannerBackground>
    )

};