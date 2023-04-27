import styled from 'styled-components';

export const Section = styled.section`
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