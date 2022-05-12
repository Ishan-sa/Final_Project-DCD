import styled, { keyframes } from "styled-components";
import { useRouter } from "next/router";
import Background from "../comps/background";
import BodyText from "../comps/text-content";
import Img from "../comps/image";
import Image from "next/image";
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import { fadeIn, topToBottom, CloudsMovingLTR, ContScale } from '../data/animations'

const FashoidHead = styled.div`
    position: relative;
    padding: 250px 0px 0px 45px;
    font-size: 24px;
    font-weight: 600;
    animation: ${topToBottom} 1s;
`
const FashSubHead = styled.div`
    position: relative;
    font-size: 15px;
    padding: 8px 0px 0px 50px;
    animation: ${topToBottom} 1s;
`
const EnterHere = styled.div`
    position: relative;
    padding: 105px 0px 0px 180px;
    font-size: 16px;
    transform: rotate(-9.53deg);
    animation: ${fadeIn} 2s;
`
const Cursor = styled.div`
    position: relative;
    margin: 3px 0px 0px 260px;
    cursor: pointer;
    animation: 1.5s linear ${ContScale};
    animation-iteration-count: infinite;
`

const Back = styled(ArrowBackIosSharpIcon)`
    position: absolute;
    margin: 20px 0px 0px 20px;
    height: 30px;
    width: auto;
    color: #333;
    cursor: pointer;
    z-index: 999;
    animation: ${topToBottom} 1s;
`

const HomeCont = styled.div`
    animation: ${fadeIn} 0.5s;
`

const CarCont = styled.div`
    display: flex;
    padding: 120px 0px 0px 40px;
`
const CloudsCont = styled.div`
    position: absolute;
    display: flex;
    padding: 27px 0px 0px 20px;
    width: 370px;
    animation: ${CloudsMovingLTR} 30s linear;
    // animation-iteration-count: infinite;
`

export default function Start() {
    const r = useRouter();

    return <HomeCont>
        <Back
            onClick={
                () => r.back("")
            }
        />
        <CloudsCont>
            <Img
                img="/cloud1.svg"
                w="106"
                h="66"
                padding="0px 0px 50px 0px"
            />
            <Img
                img="/cloud2.svg"
                w="106"
                h="66"
                padding="100px 0px 0px 30px"
            />
            <Img
                img="/cloud3.svg"
                w="106"
                h="66"
                padding="0px 0px 120px 0px"
            />
        </CloudsCont>
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
        <CarCont>
            <Img
                img="/car.svg"
                w="126"
                h="51"
                padding="0px 0px 90px 0px"
                animation="CarMovingRight"
            />
            <Img
                img="/car2.svg"
                w="183"
                h="52"
                padding="110px 0px 0px 0px"
            />
        </CarCont>


    </HomeCont>
}