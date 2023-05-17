import { FC, useContext, useState } from "react";
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
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store";
import { signIn } from "../../../store/slices/userSlice/thunk";
import { PayloadAction } from "@reduxjs/toolkit";
import { searchSchenduleDate } from "../../../store/slices/scheanduleSlice/thunk";

export const Login: FC = () => {

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const initialDataUser: IUserLoginDTO = {
        email: '',
        password: ''
    };

    const [ dataUser, setDataUser ] = useState<IUserLoginDTO>(initialDataUser);

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        const { payload } = await dispatch(signIn({ email: dataUser.email, password: dataUser.password }))

        //@ts-ignore
        if (payload.statusCode === 200) {
            setDataUser(initialDataUser);
            navigate('/dashboard');
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
                            <Link to={'/resetpassword'} >Redefinir senha</Link>
                            <Link to={'/register'} >Cadastre-se</Link>
                        </FooterForm>
                    </Form>
                </AlignItemsCenter>
            </Section>
       </BannerBackground>
    )

};