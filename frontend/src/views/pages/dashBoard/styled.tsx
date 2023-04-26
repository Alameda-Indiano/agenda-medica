import styled from 'styled-components';

export const DashBoard = styled.div`

    box-shadow: 4px 4px 13px 6px #c3c3c3;
    background: #f7f7f7;
    height: 70%;
    max-height: 600px;
    min-height: 30rem;
    max-width: 75%;
    width: 90%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    border-radius: 15px;
    padding: 20px;
    flex-direction: column;

    @media (max-width: 1200px){
        max-width: 80%;
        width: 75%;
    }

    @media (max-width: 992px){
        height: 50%;
        max-height: 50%;
        max-width: 80%;
        width: 100%;
    };

    @media (max-width: 768px){
        max-height: 70%;
        height: 95%;
        max-width: 95%;
        width: 100%;
    };

`;

export const DashBoardHeader = styled.header`

    width: 100%;
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;

    border-bottom: solid 3px #c3c3c3;

    @media (max-width: 992px){
        flex-direction: column;
        button {
            width: 90%;
        }
    };

`;

export const ContainerIndicators = styled.div`

    display: flex;

`;

export const Indicators = styled.div`

    span {
        font-size: 1.5rem;
        font-weight: bold;
        font-family: cursive;
    }

    h1 {
        font-size: 0.9rem;
        margin: 10px;
        font-family: math;
    }

`;