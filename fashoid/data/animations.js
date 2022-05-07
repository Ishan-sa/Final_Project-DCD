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