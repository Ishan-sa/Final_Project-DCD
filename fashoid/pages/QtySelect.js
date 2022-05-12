import { useRouter } from "next/router";
import styled from "styled-components";
import Background from "../comps/background";
import BodyText from "../comps/text-content";
import { useState } from 'react';
import { ChangeQuantity } from '../data/data'
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import { useEffect } from "react"
import "aos/dist/aos.css";
import Aos from "aos";


const IncBtn = styled.button`
    width: 50px;
    height: 50px;
    background-color: #DDECBF;
    padding: 10px;
    border-radius: 50%;
    border: 0;
    cursor: pointer;
    font-size: 20px;
    background-image: url("/plus.svg");
    background-repeat: no-repeat;
    background-position: right 16px center;
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
    background-image: url("/minus.svg");
    background-repeat: no-repeat;
    background-position: right 16px center;

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
    padding: 8px 50px 8px 50px;
    font-weight: 400;
    font-size: 26px;
    background-color: #BBC5A7;
    width: auto;
    height: 50px;
    margin: 0px 20px 0px 20px;
    border-radius: 30px;
    color: white;
`
const NextBtnCont = styled.div`
    display: flex;
    justify-content: center;
`
const Home = styled(HomeIcon)`
    color: #333;
    height: 40px;
    width: auto;
    position: absolute;
    margin: 15px 0px 0px 330px;
    cursor: pointer;
`
const Back = styled(ArrowBackIosSharpIcon)`
    position: absolute;
    margin: 20px 320px 0px 0px;
    height: 30px;
    width: auto;
    color: #333;
    cursor: pointer;
`
const MainCont = styled.div`
    width: 100vw;
    padding: 120px 0px 120px 0px;
`

const NavCont = styled.div`
    position: absolute;
    bottom: 845px;
    right: 375px;
`

const Counter = () => {
    const r = useRouter();
    const [count, setCount] = useState(0);
    return (
        <MainCont>
            <NavCont>
                <Home
                    onClick={
                        () => r.push("/")
                    }
                />
                <Back
                    onClick={
                        () => r.back("")
                    }
                />
            </NavCont>
            <AllCounter data-aos="flip-up">
                <DecBtn onClick={
                    () => setCount(count - 1)}> {ChangeQuantity(count)}
                </DecBtn>
                <CountCont className="styles.count">{count}</CountCont>
                <IncBtn onClick={
                    () => setCount(count + 1)}> {ChangeQuantity(count)}
                </IncBtn>
            </AllCounter>
        </MainCont>
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
    margin-bottom: 30px;
    border: 0;
    border-radius: 8px;
    background-color: #96A96F;
    color: white;
    font-size: 17px;
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='7.41' height='12' viewBox='0 0 7.41 12'%3E%3Cpath d='M10,6,8.59,7.41,13.17,12,8.59,16.59,10,18l6-6Z' transform='translate(-8.59 -6)' fill='%23fff'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 24px center;
    font-family: 'Montserrat', sans-serif;
`

export default function QtySelect() {
    const r = useRouter();
    const { type } = r.query;
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return <All_Cont>
        <Background img="/Home_bg.svg" />
        <div data-aos="flip-up">
            <BodyText txt="How many would you like to buy? (Upto 4)" fontsize="20px" />
        </div>
        <Counter />
        <NextBtnCont data-aos="flip-down">
            <NextBtn onClick={
                () => r.replace({
                    pathname: "/fact",
                })
            }>Next</NextBtn>
        </NextBtnCont>
    </All_Cont>
}

// var count = 1;

// if (count === 1){
//     console.log("working")
// }