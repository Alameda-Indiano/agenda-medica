import styled from "styled-components";
import imgBannerBackGround from '../../assets/images/banner_bg.png'


export const BannerBackground = styled.section`
    height: 80vh;
    position: relative;
    overflow: hidden;
    background-image: url(${imgBannerBackGround});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;

    @media (max-width: 992px){
        background-image: none;
        background-color: #f7f7f7;
    };

    @media (max-width: 576px){
        height: 90vh;
    };

`;

export const SectionHome = styled.section`
    width: 100%;
    height: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: 576px){
        max-width: 540px;
    };
    @media (min-width: 768px){
        max-width: 720px;
    };
    @media (min-width: 992px){
        max-width: 960px;
    };
    @media (min-width: 1200px){
        max-width: 1140px;
    }
    @media only screen and (min-width: 1200px) and (max-width: 3640px) {
        max-width: 1170px;
    };
`;

export const ContainerHome = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const HomeLeft = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HomeRigth = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 30rem;
    };

    @media (max-width: 992px){
        display: none;
    };
`;

export const ImageHome = styled.img`
    max-width: 70%;
`;

export const Apresentation = styled.div`
    width: 100%;
    height: 40%;
    max-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    p {
        font-size: 1.2rem;
    }

    @media (max-width: 992px){
        text-align: center;
        height: 65%;
    };

    @media (max-width: 768px){
        text-align: center;
        height: 70%;
        p {
            font-size: 1.1rem;
        }
    };

    @media (max-width: 576px){
        text-align: center;
        height: 85%;
        max-height: 500px;
    };

`;

export const Title = styled.div`
    h1 {
        font-size: 3rem;
        padding: 5px 0px;
    }

    h5 {
        font-size: 1rem;
    }

    @media (max-width: 768px){
        h1 {
            font-size: 2.5rem;
        }
        h5 {
            font-size: 0.9rem;
        }
    };

`;

export const ContainerButtons = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    
    button {
        margin-top: 2rem;
        margin-right: 5rem;
    }

    @media (max-width: 992px){
        justify-content: space-around;
        button {
            margin-right: 0rem;
        }
        flex-wrap: wrap;
    };

    @media (max-width: 576px){
        button {
            width: 90%;
            margin: 20px;
        }
    };

`;
