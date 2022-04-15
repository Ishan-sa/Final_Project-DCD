import styled from "styled-components";
const Introduction = styled.div`
    color: #333333;
    width: 100%;
    padding: 12px 0px 12px 0px;
    text-align: center;
    color: ${props => props.cl};
`

export default function BodyText({
    txt = "lorem ipsum",
    color = "#333333",
    display = "flex",
    jcontent = "center"
}) {
    return <Introduction cl={color}>
        {txt}
    </Introduction>
}