import styled from "styled-components";
import Image from "next/image";

const BackgroundImage = styled.div`
    position: absolute;
    width: 390px;
    height: 1146px;
    z-index: -999;
`

export default function Background({
    img = "/vercel.svg"
}) {
    return <BackgroundImage>
        <Image src={"/Home_bg.svg"} width={390} height={1146} />
    </BackgroundImage>
}