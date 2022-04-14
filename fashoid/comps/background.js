import styled from "styled-components";
import Image from "next/image";

const BackgroundImage = styled.div`
    position: fixed;
    width: 390px;
    height: 100vh;
    z-index: -999;
`
const BGImg = styled.img`
    width: 390px;
    height: auto;
`
export default function Background({
    img = "/vercel.svg"
}) {
    return <BackgroundImage>
        <BGImg src={img} />
    </BackgroundImage>
}