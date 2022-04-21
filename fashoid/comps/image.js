import styled from "styled-components";
import Image from "next/image";

const AllImages = styled.div`
    display: flex;
    justify-content: center;
    padding: ${props => props.p};
    position: ${props => props.po};
    // margin: ${props => props.m}
`

export default function Img({
    img = "/vercel.svg",
    w = 65,
    h = 65,
    padding = "20px 0px 20px 0px",
    position = "relative",
    margin = "0px 0px 0px 0px",
}) {
    return <AllImages p={padding} po={position}>
        <Image src={img} width={w} height={h} p={padding} m={margin} />
    </AllImages>
}
