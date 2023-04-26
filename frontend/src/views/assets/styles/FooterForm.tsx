import styled from 'styled-components';

export const FooterForm = styled.div`

    width: 90%;
    display: flex;
    justify-content: space-between;

    a {
        text-decoration: none;
        color: black;
        font-size: 1.05rem;
        font-family: math;
        cursor: pointer;
        margin: 2px;
    }

    a:hover {

        color: rgb(100, 155, 255);

    }

    @media (max-width: 375px){
        gap: 35px;
        margin-top: 20px;
        flex-direction: column;
    };

`;