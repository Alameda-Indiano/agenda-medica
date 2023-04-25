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

export const Register: FC = () => {

    const teste = () => {
        
    }

    return (
       <BannerBackground ViewHeight={100} >
            <Header />
            <Section>
                <AlignItemsCenter>
                    <Form img={LoginImage} title="Cadastrar-se" >
                        <Inputs type="text" placeholder="Nome" />
                        <Inputs type="text" placeholder="Email" />
                        <Inputs type="text" placeholder="Senha" />
                        <Inputs type="text" placeholder="Confirmar senha" />
                        <Button eventClick={teste} >Enviar</Button>
                        <FooterForm>
                            <a href="">Realizar login</a>
                        </FooterForm>
                    </Form>
                </AlignItemsCenter>
            </Section>
       </BannerBackground>
    )

};