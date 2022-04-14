import styled from "styled-components";

const AllButtons = styled.div`
    background-color: #fff;
`

export default function Button({
    btn = "This is a button"
}) {
    return <AllButtons>
        <Button></Button>
    </AllButtons>
}