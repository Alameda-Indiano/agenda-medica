import styled from "styled-components";
import imgBannerBackGround from '../../assets/images/banner_bg.png'


export const BannerBackground = styled.section<{ ViewHeight: number }>`
    height: ${({ ViewHeight }) =>  `${ViewHeight}vh` };
    position: relative;
    overflow: hidden;
    background-image: url(${imgBannerBackGround});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;



`;