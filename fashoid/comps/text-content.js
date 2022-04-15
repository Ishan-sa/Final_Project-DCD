import styled from "styled-components";
const Introduction = styled.div`
    color: #333333;
    width: 100%;
    padding: 12px 0px 12px 0px;
    text-align: center;
`

export default function BodyText({
    txt = "lorem ipsum"
}) {
    return <Introduction>
        {txt}
    </Introduction>
}