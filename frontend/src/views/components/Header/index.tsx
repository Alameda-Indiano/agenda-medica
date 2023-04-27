import { FC, useContext, useState } from "react";
import * as styled from './styled';
import { useNavigate } from "react-router-dom";
import ImageIcone from '../../assets/images/icone.png';
import { AuthUserContext } from "../../../context/AuthContext";

export const Header: FC = () => {

    const navigate = useNavigate();
    const [ toogle, setToogle ] = useState< boolean >(true);
    const { loggedUser, singOut } = useContext(AuthUserContext);

    return (
        <styled.Header ToogleMenu={ toogle } >
            <styled.Navgator ToogleMenu={ toogle }>
                <styled.RedirectHome onClick={() => navigate( loggedUser ? '/dashboard' : '/') } ToogleMenu={ toogle } >
                    <img src={ImageIcone} alt="" />
                    <h3>My Pharma</h3>
                </styled.RedirectHome>
                {
                    loggedUser ? 
                        <styled.ContainerLinks ToogleMenu={ toogle } >
                            <li><a onClick={() => navigate('/dashboard')} >Dashboard</a></li>
                            <li><a onClick={() => navigate('/agendamento')} >Agendamento</a></li>
                            <li><a onClick={() => navigate('/formcreateschendules')} >Novo agendamento</a></li>
                            <li><a onClick={() => singOut()} >Sair</a></li>
                        </styled.ContainerLinks>
                    : ''
                }
                {
                    loggedUser ? 
                        <styled.MenuHamburguer onClick={() => { setToogle(!toogle) }} >
                            <styled.LineMenuHamburguer ToogleMenu={ toogle }></styled.LineMenuHamburguer>
                            <styled.LineMenuHamburguer ToogleMenu={ toogle }></styled.LineMenuHamburguer>
                            <styled.LineMenuHamburguer ToogleMenu={ toogle }></styled.LineMenuHamburguer>
                            <styled.ArrowRightMenuHamburguer ToogleMenu={ !toogle }></styled.ArrowRightMenuHamburguer>
                            <styled.ArrowLeftMenuHamburguer ToogleMenu={ !toogle }></styled.ArrowLeftMenuHamburguer>
                        </styled.MenuHamburguer>
                    : ''
                }
            </styled.Navgator>
        </styled.Header>
    )
};