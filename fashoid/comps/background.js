import styled from "styled-components";
import Image from "next/image";

const BackgroundImage = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: -999;
`
const BGImg = styled.img`
    width: 100%;
    height: auto;
`

const BackgroundImage2 = styled.div`
    position: fixed;
    width: auto;
    height: 100vh;
    z-index: -999;
`
const BGImg2 = styled.img`
    width: 100vw;
    height: 100vh;
`
export default function Background({
    img = "/vercel.svg"
}) {
    return <BackgroundImage>
        <BGImg src={img} />
    </BackgroundImage>
}

export function Background2({
    img = "/vercel.svg"
}) {
    return <BackgroundImage2>
        <BGImg2 src={img} />
    </BackgroundImage2>
}