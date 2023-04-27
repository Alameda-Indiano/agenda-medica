import styled from 'styled-components';

export const Header = styled.header<{ ToogleMenu: boolean }>`

    width: 100%;
    z-index: 999;
    position: fixed;
    background: white;
    padding: 1.5rem 3.8rem;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 10px #6d6d6d91;

    
    @media (max-width: 992px){
        display: ${ (props) => props.ToogleMenu ? 'flex' : '' };
        position: ${ (props) => props.ToogleMenu ? 'inherit' : 'absolute' };
        height: ${ (props) => props.ToogleMenu ? '' : '100vh' };
        z-index: 99;
    }
`;

export const Navgator = styled.nav<{ ToogleMenu: boolean }>`

    @media (max-width: 992px){
      
        align-items: ${ (props) => props.ToogleMenu ? 'center' : '' };  
    }

    display: flex;
    width: 100%;
    justify-content: space-between;
    
    h3 {
        font-size: 1.8rem;
    }

    a {
        cursor: pointer;
    }

    @media (max-width: 576px){
        a {
            display: block;
            
            h3 {
                display: none;
            }

            img {
                width: 1.6rem;
            }
        }

    };

`;

export const ContainerLinks = styled.ul<{ ToogleMenu: boolean }>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    li {
        font-size: 1.3rem;
        font-family: math;
        cursor: pointer;
    }

    @media (max-width: 992px){

        height: 90vh;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;

        @media (max-width: 992px){
            display:  ${ (props) => props.ToogleMenu ? 'none' : 'flex' };
            li {
                display: ${ (props) => props.ToogleMenu ? 'none' : 'flex' };
            }
        }

    };
`;

export const RedirectHome = styled.a<{ ToogleMenu: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-decoration: none;
    color: black;
    font-size: 2rem;

    min-width:  200px;

    @media (max-width: 992px){
        position:  ${ (props) => props.ToogleMenu ? '' : 'absolute' };
    }

    img {
        width: 2rem;
    }

    @media (max-width: 576px){
        min-width: 0px;
    };
`;

export const MenuHamburguer = styled.div`

    display: flex;
    width: 2.3rem;
    height: 2rem;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    cursor: pointer;
    

    @media (min-width: 992px){
        display: none;
    };

`;

export const LineMenuHamburguer = styled.div<{ ToogleMenu: boolean }>`
    display: ${ (props) => props.ToogleMenu ? 'flex' : 'none' };
    width: 100%;
    height: .3rem;
    background: rgb(108 117 125);
    border-radius: 5px;
`;

export const ArrowRightMenuHamburguer = styled.div<{ ToogleMenu: boolean }>`
    display: ${ (props) => props.ToogleMenu ? 'flex' : 'none' };
    width: 100%;
    height: .3rem;
    background: rgb(108 117 125);
    border-radius: 5px;
    rotate: 50deg;
`;


export const ArrowLeftMenuHamburguer = styled.div<{ ToogleMenu: boolean }>`
    display: ${ (props) => props.ToogleMenu ? 'flex' : 'none' };
    margin-top: -30.5px;
    rotate: -50deg;
    width: 100%;
    height: .3rem;
    background: rgb(108 117 125);
    border-radius: 5px;
`;