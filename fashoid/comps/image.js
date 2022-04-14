import styled from "styled-components";
import Image from "next/image";

const AllImages = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0px 20px 0px;
`

export default function Img({
    img = "/vercel.svg",
    w = 65,
    h = 65
}) {
    return <AllImages>
        <Image src={img} width={w} height={h} />
    </AllImages>
}

// export default function Background({
//     img = "/Home_bg.svg"
// })