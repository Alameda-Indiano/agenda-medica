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
import { UserResetPasswordService } from "../../../useCases/User/services/UserResetPasswordService/UserResetPasswordService";
import { UsersRepositoryInDatabase } from "../../../repositories/UserRepository/in-database/UsersRepositoryInDatabase";
import { IUserResetPasswordDTO } from "../../../useCases/User/IUserDTOs/UseResetPassword/IUserResetPasswordDTO";

export const RequestPasswordReset: FC = () => {

    const usersRepositoryInDatabase = new UsersRepositoryInDatabase();
    const userResetPasswordService = new UserResetPasswordService(usersRepositoryInDatabase);

    const initialStateUserResetPassWord: IUserResetPasswordDTO = { code: '', email: '', confirmPassword: '', password: '' };
    
    const [ dataUserResetPassWord, setDataUserResetPassWord ] = useState<IUserResetPasswordDTO>(initialStateUserResetPassWord);
    const [ toogle, setToogle ] = useState<boolean>(false);

    const handleRequestPasswordReset = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        const { data: { message, statusCode } } = await userResetPasswordService.request({ email: dataUserResetPassWord.email });

        if (statusCode === 200) {

            alert(message);
            setToogle(true);

        };

    };

    const handleResetPassword = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        const { data: { message, statusCode, value: { jwt } } } = await userResetPasswordService.resetPassword({ 
            email: dataUserResetPassWord.email,
            code: dataUserResetPassWord.code,
            confirmPassword: dataUserResetPassWord.confirmPassword,
            password: dataUserResetPassWord.password
        });

        if (statusCode === 200) {

            alert(message)
            setToogle(false);
            setDataUserResetPassWord(initialStateUserResetPassWord)

        };

    };

    return (
       <BannerBackground ViewHeight={100} >
            <Header />
            <Section>
                <AlignItemsCenter>
                    <Form img={LoginImage} title={ toogle ? 'Redefinir Senha' : 'Solicitar Redefinição de Senha' } >

                        { toogle ?  <Inputs type="text" value={ dataUserResetPassWord.password } onChange={(e) => setDataUserResetPassWord({ ...dataUserResetPassWord, password: e.target.value })} placeholder="Nova senha" /> : '' }
                        { toogle ?  <Inputs type="text" value={ dataUserResetPassWord.confirmPassword } onChange={(e) => setDataUserResetPassWord({ ...dataUserResetPassWord, confirmPassword: e.target.value })} placeholder="Repetir senha" />  : '' }

                        { 
                            toogle ?  
                                <Inputs type="text" value={ dataUserResetPassWord.code } onChange={(e) => setDataUserResetPassWord({ ...dataUserResetPassWord, code: e.target.value })} placeholder="Código de 8 digitos" /> 
                            : 
                                <Inputs type="text" value={ dataUserResetPassWord.email } onChange={(e) => setDataUserResetPassWord({ ...dataUserResetPassWord, email: e.target.value })} placeholder="Informe o seu email" />
                        }
                        
                        { 
                            toogle ? 
                                <Button width="90%" eventClick={handleResetPassword} >Enviar</Button>
                                : 
                                <Button width="90%" eventClick={handleRequestPasswordReset} >Solicitar</Button>
                        }
                        
                        <FooterForm>
                            <a href="">Cadastre-se</a>
                            {
                                toogle ? 
                                    <a href="">Enviar Código Novamente</a>
                                : ''
                            }
                        </FooterForm>
                    </Form>
                </AlignItemsCenter>
            </Section>
       </BannerBackground>
    )

};