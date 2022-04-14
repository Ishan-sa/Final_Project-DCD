import styled from "styled-components";
const Introduction = styled.div`
    color: black;
    width: 336px;
    padding: 12px 0px 12px 0px;
    text-align: center;
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