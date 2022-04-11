import styled from "styled-components";
import Image from "next/image";


export default function Img({
    img="/GirlThinking.svg"
}) {
    return <Image src={img} width={65.61} height={188.01} />
}