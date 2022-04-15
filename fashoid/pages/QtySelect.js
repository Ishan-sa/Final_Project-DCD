import { useRouter } from "next/router";
import styled from "styled-components";
import Background from "../comps/background";
import BodyText from "../comps/text-content";
import { useState } from 'react';


const IncBtn = styled.button`
    width: 50px;
    height: 50px;
    background-color: #DDECBF;
    padding: 10px;
    border-radius: 50%;
    border: 0;
    cursor: pointer;
    font-size: 20px;
`
const DecBtn = styled.button`
    width: 50px;
    height: 50px;
    background-color: #DDECBF;
    padding: 10px;
    border-radius: 50%;
    border: 0;
    cursor: pointer;
    font-size: 24px;
`
const AllCounter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    z-index: 10;
    flex: 0.6;
    padding-bottom: 200px;
`
const CountCont = styled.div`
    padding: 0px 50px 0px 50px;
`

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <AllCounter>
            <IncBtn
                className="styles.button"
                onClick={() => setCount(count + 1)}
            >+</IncBtn>
            <CountCont className="styles.count">{count}</CountCont>
            <DecBtn
                onClick={() => setCount(count - 1)}
            >
                -
            </DecBtn>
        </AllCounter>
    )
}



const All_Cont = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`
const NextBtn = styled.button`
    width: 117px;
    height: 40px;
    display: block;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 8px;
    background-color: #96A96F;
    color: white;
    font-size: 17px;
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='7.41' height='12' viewBox='0 0 7.41 12'%3E%3Cpath d='M10,6,8.59,7.41,13.17,12,8.59,16.59,10,18l6-6Z' transform='translate(-8.59 -6)' fill='%23fff'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 24px center;
`

export default function QtySelect() {
    const r = useRouter();

    return <All_Cont>
        <Background img="/Home_bg.svg" />
        <BodyText txt="How many would you like to buy?" />
        <Counter />
        <NextBtn>
            Next
        </NextBtn>
    </All_Cont>
}