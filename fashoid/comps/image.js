import styled from "styled-components";
import Image from "next/image";

const GirlThinkingImg = styled.div`
    display: flex;
    justify-content: center;
`

export default function Img({
    img = "/vercel.svg"
}) {
    return <GirlThinkingImg>
        <Image src={img} width={65.61} height={188.01} />
    </GirlThinkingImg>
}








// export default function Background({
//     img = "/Home_bg.svg"
// })