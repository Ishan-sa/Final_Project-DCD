import styled from "styled-components";
const Introduction = styled.div`
    color: #333333;
    width: 100%;
    padding: 12px 0px 12px 0px;
    text-align: center;
    color: ${props => props.cl};
    font-size: ${props => props.sz};
`

export default function BodyText({
    txt = "lorem ipsum",
    color = "#333333",
    fontsize = "16px",
}) {
    return <Introduction cl={color} sz={fontsize}>
        {txt}
    </Introduction>
}