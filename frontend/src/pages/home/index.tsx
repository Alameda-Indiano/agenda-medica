import { FC } from "react";
import { Apresentation, BannerBackground, ContainerButtons, ContainerHome, HomeLeft, HomeRigth, SectionHome, Title } from "./styled";
import ImageHome from '../../assets/images/home.png';
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

export const Home: FC = () => {

    const teste = () => {

    };

    return (
        <BannerBackground>
            <Header/>
            <SectionHome>
                <ContainerHome>
                    <HomeLeft>
                       <Apresentation>
                            <Title>
                                <h5>Estamos Aqui Para O Seu Cuidado</h5>
                                <h1>Melhor Cuidado & Melhor Atendimento</h1>
                            </Title>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus cmodo viverra</p>
                            <ContainerButtons>
                                <Button eventClick={teste} >Cadastre-se</Button>
                                <Button eventClick={teste} >Realizar Login</Button>
                            </ContainerButtons>
                       </Apresentation>
                    </HomeLeft>
                    <HomeRigth>
                        <img style={{ maxWidth: '100%' }} src={ ImageHome } alt="Imagem de paciente na maca." />
                    </HomeRigth>
                </ContainerHome>
            </SectionHome>
        </BannerBackground>
    )

};