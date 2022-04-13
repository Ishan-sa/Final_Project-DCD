import styled from 'styled-components';

const Heading = styled.div`
    color: #333333;
    font-size: 24px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    padding-top: 20px;
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