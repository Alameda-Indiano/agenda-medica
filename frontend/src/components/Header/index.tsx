import { FC, useState } from "react";
import * as styled from './styled';
import ImageIcone from '../../assets/images/icone.png';

export const Header: FC = () => {

    const [ toogle, setToogle ] = useState< boolean >(true);

    return (
        <styled.Header ToogleMenu={ toogle } >
            <styled.Navgator ToogleMenu={ toogle }>
                <styled.RedirectHome ToogleMenu={ toogle } >
                    <img src={ImageIcone} alt="" />
                    <h3>My Pharma</h3>
                </styled.RedirectHome>
                <styled.ContainerLinks ToogleMenu={ toogle } >
                    <li><a>Dashboard</a></li>
                    <li><a>Agendamento</a></li>
                    <li><a>Sair</a></li>
                </styled.ContainerLinks>
                <styled.MenuHamburguer onClick={() => { setToogle(!toogle) }} >
                    <styled.LineMenuHamburguer ToogleMenu={ toogle }></styled.LineMenuHamburguer>
                    <styled.LineMenuHamburguer ToogleMenu={ toogle }></styled.LineMenuHamburguer>
                    <styled.LineMenuHamburguer ToogleMenu={ toogle }></styled.LineMenuHamburguer>
                    <styled.ArrowRightMenuHamburguer ToogleMenu={ !toogle }></styled.ArrowRightMenuHamburguer>
                    <styled.ArrowLeftMenuHamburguer ToogleMenu={ !toogle }></styled.ArrowLeftMenuHamburguer>
                </styled.MenuHamburguer>
            </styled.Navgator>
        </styled.Header>
    )
};