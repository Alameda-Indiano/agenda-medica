import { useNavigate } from "react-router-dom";
import { FC } from "react";
import { Apresentation, ContainerButtons, HomeLeft, HomeRigth, Title } from "./styled";
import ImageHome from '../../assets/images/home.png';
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { BannerBackground } from "../../assets/styles/BannerBackground";
import { Section } from "../../assets/styles/Section";
import { AlignItemsCenter } from "../../assets/styles/AlignItemsCenter";

export const Home: FC = () => {

    const navigate = useNavigate();

    return (
        <BannerBackground ViewHeight={100} >
            <Header/>
            <Section style={{ height: '100vh' }} >
                <AlignItemsCenter>
                    <HomeLeft>
                       <Apresentation>
                            <Title>
                                <h5>Estamos Aqui Para O Seu Cuidado</h5>
                                <h1>Melhor Cuidado & Melhor Atendimento</h1>
                            </Title>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus cmodo viverra</p>
                            <ContainerButtons>
                                <Button width="90%" eventClick={() => navigate('/register')} >Cadastre-se</Button>
                                <Button width="90%" eventClick={() => navigate('/login')} >Realizar Login</Button>
                            </ContainerButtons>
                       </Apresentation>
                    </HomeLeft>
                    <HomeRigth>
                        <img style={{ maxWidth: '100%' }} src={ ImageHome } alt="Imagem de paciente na maca." />
                    </HomeRigth>
                </AlignItemsCenter>
            </Section>
        </BannerBackground>
    )

};