import styled, { keyframes } from "styled-components";
import { useRouter } from "next/router";
import Background from "../comps/background";
import BodyText from "../comps/text-content";
import Img from "../comps/image";
import Image from "next/image";
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import { fadeIn, topToBottom, ContScale } from '../data/animations'

const FashoidHead = styled.div`
    position: absolute;
    font-size: 24px;
    font-weight: 600;
    top: 251px;
    left: 155px;
    animation: ${topToBottom} 1s;
`
const FashSubHead = styled.div`
    position: absolute;
    font-size: 15px;
    top: 285px;
    left: 87px;
    animation: ${topToBottom} 1s;
    transition: 0.5s;
`
const EnterHere = styled.div`
    position: absolute;
    font-size: 16px;
    top: 397px;
    left: 229px;
    transform: rotate(-9.53deg);
    animation: ${fadeIn} 2s;
`
const Cursor = styled.div`
    position: absolute;
    left: 73.85%;
    top: 51.8%;
    cursor: pointer;
    animation: ${topToBottom} 1.5s;
`

const Back = styled(ArrowBackIosSharpIcon)`
    position: absolute;
    margin: 20px 0px 0px 20px;
    height: 30px;
    width: auto;
    color: #333;
    cursor: pointer;
`

const HomeCont = styled.div`
    animation: ${fadeIn} 0.5s;
`

export default function Start() {
    const r = useRouter();

    return <HomeCont>
        <Back
            onClick={
                () => r.back("")
            }
        />
        <Background img="/start_page.svg" />

        <FashoidHead>
            <BodyText txt="Fashoid" fontsize="23px" />
        </FashoidHead>

        <FashSubHead>
            <BodyText
                txt="Click on the door to proceed"
                color="white"
            />
        </FashSubHead>

        <EnterHere>
            <BodyText txt="Enter Here" />
        </EnterHere>

        <Cursor onClick={
            () => r.push("/store")
        }>
            <Img
                img="/Pointer.svg"
                w="34"
                h="37.09"
            />
        </Cursor>


    </HomeCont>
}