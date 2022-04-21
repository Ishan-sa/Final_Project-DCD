import styled from "styled-components";
const Introduction = styled.div`
    color: #333333;
    width: 100%;
    padding: 12px 0px 12px 0px;
    text-align: center;
    color: ${props => props.cl};
    font-size: ${props => props.sz};
    padding: ${props => props.pd};
    margin: ${props => props.mg};
    width: ${props => props.w}
`

export default function BodyText({
    txt = "lorem ipsum",
    color = "#333333",
    fontsize = "16px",
    padding = "0px 0px 0px 0px",
    margin = "0px 0px 0px 0px",
    width = "100%"
}) {
    return <Introduction cl={color} sz={fontsize} pd={padding} mg={margin} w={width}>
        {txt}
    </Introduction>
}