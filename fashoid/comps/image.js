import styled from "styled-components";
import Image from "next/image";

const AllImages = styled.div`
    display: flex;
    justify-content: center;
    padding: ${props => props.p};
    position: ${props => props.po};
    margin: ${props => props.m};
    top: ${props => props.t};
    right: ${props => props.right};
    bottom: ${props => props.bottom};
    left: ${props => props.left};
    object-fit: ${props => props.of};
`

export default function Img({
    img = "/vercel.svg",
    w = 65,
    h = 65,
    padding = "20px 0px 20px 0px",
    position = "relative",
    margin = "0px 0px 0px 0px",
    top = "0px",
    right = "0px",
    bottom = "0px",
    left = "0px",
    objectfit = "fill"
}) {
    return <AllImages p={padding} po={position}>
        <Image src={img} width={w} height={h} p={padding} m={margin} t={top} right={right} bottom={bottom} left={left} objectFit={objectfit} />
    </AllImages>
}
