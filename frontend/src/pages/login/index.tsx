import { FC } from "react";
import { AlignItemsCenter } from "../../assets/styles/AlignItemsCenter";
import { BannerBackground } from "../../assets/styles/BannerBackground";
import LoginImage from '../../assets/images/login_image.png';
import { Section } from "../../assets/styles/Section";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { Inputs } from "../../assets/styles/Inputs";
import { Button } from "../../components/Button";
import { FooterForm } from "../../assets/styles/FooterForm";

export const Login: FC = () => {

    const teste = () => {
        
    }

    return (
       <BannerBackground ViewHeight={100} >
            <Header />
            <Section>
                <AlignItemsCenter>
                    <Form img={LoginImage} title="Realizar login" >
                        <Inputs type="text" placeholder="Email" />
                        <Inputs type="text" placeholder="Senha" />
                        <Button width="90%" eventClick={teste} >Enviar</Button>
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