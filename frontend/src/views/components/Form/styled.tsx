import styled from 'styled-components';

export const Form = styled.form`

    box-shadow: 4px 4px 13px 6px #c3c3c3;
    background: #f7f7f7;
    height: 50%;
    max-height: 600px;
    min-height: 27rem;
    max-width: 75%;
    width: 70%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    border-radius: 15px;
    padding: 20px;

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
        max-height: 50%;
        max-width: 95%;
        width: 100%;
    };

`;

export const ContainerFormImage = styled.div`

    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
    }

    @media (max-width: 992px){
        display: none;
    };

`;

export const ContainerFormItems = styled.div<{ InitialWidth: string }>`

    width: ${({ InitialWidth }) => `${InitialWidth}`};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 992px){
        width: 100%;

        button {
            width: 90%;
        }

        input {
            padding: 15px;
        }
        
    };

`;

export const ContainerTitleForm = styled.div`

    width: 90%;
    margin: 15px;

    h1 {
        font-size: 1.3rem;
        font-family: math;
    }

`;