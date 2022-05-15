import styled, { keyframes } from "styled-components";


export const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`
export const fadeOut = keyframes`
    from{
        opacity: 1;
    }
    to{
        opacity: 0;
    }
`
export const topToBottom = keyframes`
    from{
        transform: translateY(-20px);
        opacity: 0;
    }
    to{
        transform: translateY(0px);
        opacity: 1;
    }
`
export const ContScale = keyframes`
    from{
        scale: 1;
    }
    to{
        scale: 1.2;
    }
`
export const BtnClick = keyframes`
    from{
        scale: 1;
    }
    to{
        scale: 0.9;
    }
`
export const SlideInRight = keyframes`
    from {
        margin-right: 1000px;
        opacity: 0;
    }
    to{
        margin-right: 0px;
        opacity: 1;
    }
`
export const SlideInLeft = keyframes`
    from {
        margin-left: 1000px;
        opacity: 0;
    }
    to{
        margin-right: 0px;
        opacity: 1;
    }
`
export const CarMovingRight = keyframes`
    from{
        margin-right: 1000px
    }
    to{
        margin-right: -1000px;
    }
`
export const CloudsMovingLTR = keyframes`
    from{
        right: 1850px
    }
    to{
        right: -350px;
    }
`
export const ScaleIn = keyframes`
    from{
        scale: 1.1;
        opacity: 0;
    }
    to{
        scale: 1;
        opacity: 1;
    }
`

export const QuestionsSlide = keyframes`
    from{
        margin-left: 1000px;
        opacity: 0;
    }
    70%{
        margin-left: -60px;
    }
    to{
        margin-left: 0px;
        opacity: 1;
    }
`
export const SlideUp = keyframes`
    from{
        margin-top: 1000px;
    }
    to{
        margin-top: 0px;
    }
`
export const SlideLeftDiff = keyframes`
    from{
        position: relative;
        rotate: 60deg;
        left: 1000px;
        opacity: 0;
    }
    70%{
        position: relative;
        left: -50px;
    }
    to{
        position: relative;
        rotate: 0deg;
        left: 0px;
        opacity: 1;
    }
`
export const SlideRightDiff = keyframes`
    from{
        position: relative;
        rotate: 60deg;
        right: 1000px;
        opacity: 0;
    }
    70%{
        position: relative;
        right: -50px;
    }
    to{
        position: relative;
        rotate: 0deg;
        right: 0px;
        opacity: 1;
    }
`
export const topToBottomDiff = keyframes`
    from{
        position: relative;
        bottom: 1000px;
        opacity: 0;
    }
    70%{
        position: relative;
        bottom: -50px;
    }
    to{
        position: relative;
        bottom: 0px;
    }
`

/* export const Drop = keyframes`
    from{
        position: relative;
        bottom: 1000px;
        scale: 0.3;
        rotate: -45deg;
    }
    25%{
        position: relative;
        bottom: 10px;
        scale: 0.5;
        rotate: 45deg;
    }
    50%{
        position: relative;
        bottom: 20px;
        scale: 0.3;
        rotate: 60deg;
    }
    75%{
        position: relative;
        bottom: 10px;
        scale: 0.8;
        rotate: 90deg;
    }
    to{
        position: relative;
        bottom: 0px;
        scale: 1;
    }
` */
export const Drop = keyframes`
    0%   { transform: scale(1,1)      translateY(-100vh); }
    10%  { transform: scale(1.1,.9)   translateY(0vh); }
    30%  { transform: scale(.9,1.1)   translateY(-100px); }
    50%  { transform: scale(1.05,.95) translateY(0); }
    57%  { transform: scale(1,1)      translateY(-7px); }
    64%  { transform: scale(1,1)      translateY(0); }
    100% { transform: scale(1,1)      translateY(0); }
    }
`

export const LogoSplash = keyframes`
    from{
        scale: 0;
        opacity: 0;
        rotate: 60deg;
    }
    80%{
        scale: 1.2;
    }
    to{
        scale: 1;
        opacity: 1;
        rotate: 0deg;
    }
`
