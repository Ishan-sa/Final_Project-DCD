import styled from "styled-components";
const Introduction = styled.div`
    color: black;
    display: flex;
    // justify-content: center;
    // align-items: center;
    // align-content: center;
    width: 336px;
    height: 180px;
    text-align: center;
    z-index: 999;
`

export default function BodyText({
    txt = "lorem ipsum"
}) {
    return <div>
        <Introduction>
            {txt}
        </Introduction>
    </div>
}