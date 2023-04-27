import styled from 'styled-components';

export const Button = styled.button<{ width: string }>`
    background-size: 200% auto;
    background-image: linear-gradient(to right, #649bff, #0070fa, #649bff);
    border: none;
    padding: 1.1rem;
    width: ${({ width }) => width};
    margin: 20px;
    border-radius: 10px;
    color: white;
    font-size: 0.95rem;
    text-align: center;

    @media (max-width: 992px){
        width: 40%;
    };

    @media (max-width: 576px){
        padding: 1rem;
    };

    cursor: pointer;

`;