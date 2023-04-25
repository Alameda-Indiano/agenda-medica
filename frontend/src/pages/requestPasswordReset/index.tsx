import { FC } from "react";
import { AlignItemsCenter } from "../../assets/styles/AlignItemsCenter";
import { BannerBackground } from "../../assets/styles/BannerBackground";
import { Section } from "../../assets/styles/Section";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import LoginImage from '../../assets/images/login_image.png';
import { Inputs } from "../../assets/styles/Inputs";
import { Button } from "../../components/Button";
import { FooterForm } from "../../assets/styles/FooterForm";

export const RequestPasswordReset: FC = () => {

    const teste = () => {
        
    }

    return (
       <BannerBackground ViewHeight={100} >
            <Header />
            <Section>
                <AlignItemsCenter>
                    <Form img={LoginImage} title="Solicitar Redefinição de Senha" >
                        <Inputs type="text" placeholder="Informe o seu email" />
                        <Inputs type="text" placeholder="Código de 8 digitos" />
                        <Button width="90%" eventClick={teste} >Solicitar</Button>
                        <FooterForm>
                            <a href="">Cadastre-se</a>
                            <a href="">Enviar Código Novamente</a>
                        </FooterForm>
                    </Form>
                </AlignItemsCenter>
            </Section>
       </BannerBackground>
    )

};