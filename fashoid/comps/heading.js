import styled from 'styled-components';

const Heading = styled.div`
    color: #333333;
    font-size: 27.43px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    position: relative;
    left: 20px;
`

export default function Head1({
    txt = 'default text'
}) {
    return <div>
        <Heading>
            {txt}
        </Heading>
    </div>
}