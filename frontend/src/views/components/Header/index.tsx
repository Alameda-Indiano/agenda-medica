import { FC, useState } from "react";
import * as styled from './styled';
import { useNavigate } from "react-router-dom";
import ImageIcone from '../../assets/images/icone.png';
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store";
import { singOut } from "../../../store/slices/userSlice";

export const Header: FC = () => {

    const { isLogged } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();

    const navigate = useNavigate();
    const [ toogle, setToogle ] = useState< boolean >(true);

    return (
        <styled.Header ToogleMenu={ toogle } >
            <styled.Navgator ToogleMenu={ toogle }>
                <styled.RedirectHome onClick={() => navigate( isLogged ? '/dashboard' : '/') } ToogleMenu={ toogle } >
                    <img src={ImageIcone} alt="" />
                    <h3>My Pharma</h3>
                </styled.RedirectHome>
                {
                    isLogged ? 
                        <styled.ContainerLinks ToogleMenu={ toogle } >
                            <li><Link className="link" to={'/dashboard'}>Dashboard</Link></li>
                            <li><Link className="link" to={'/agendamento'}>Agendamento</Link></li>
                            <li><Link className="link" to={'/formcreateschendules'} >Novo agendamento</Link></li>
                            <li><a onClick={() => dispatch(singOut())} >Sair</a></li>
                        </styled.ContainerLinks>
                    : ''
                }
                {
                    isLogged ? 
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