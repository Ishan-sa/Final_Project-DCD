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
        right: 350px
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