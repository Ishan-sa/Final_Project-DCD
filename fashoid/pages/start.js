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
    padding: 0px 0px 469px 60px;
    z-index: 99;
    margin: 0px 0px 0px 0px;
    position: absolute;
    font-size: 24px;
    font-weight: 600;
    animation: ${topToBottom} 1s;
`
const FashSubHead = styled.div`
    position: relative;
    font-size: 15px;
    position: absolute;
    z-index: 99;
    padding: 8px 0px 417px 62px;
    animation: ${topToBottom} 1s;
`
const EnterHere = styled.div`
    position: relative;
    padding: 0px 0px 146px 236px;
    font-size: 16px;
    position: absolute;
    z-index: 99;
    transform: rotate(-9.53deg);
    animation: ${fadeIn} 2s;
`
const Cursor = styled.div`
    position: absolute;
    z-index: 199;
    margin: 0px 0px 45px 273px;
    cursor: pointer;
    animation: 1s linear ${ContScale} alternate;
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
    display: flex;
    flex-direction: column;
`

const CarCont = styled.div`
    display: flex;
    position: absolute;
    z-index: 99;
    padding: 495px 0px 0px 60px;
`
const CloudsCont = styled.div`
    position: absolute;
    display: flex;
    padding: 27px 0px 0px 20px;
    width: 370px;
    animation: ${CloudsMovingLTR} 20s linear;
    animation-iteration-count: infinite;
`
const ShopRoadCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`
const NavBtns = styled.div`
    
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
        <Background img="/BlueBg.svg" />
        <ShopRoadCont>
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
            <Img
                img="/Shop.svg"
                w="352"
                h="301"
                padding="120px 0px 0px 50px"
            />
            <Img
                img="/Road.svg"
                w="390"
                h="336"
                padding="0px 0px 0px 50px"
            />
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
        </ShopRoadCont>

        {/* <FashoidHead>
            <BodyText txt="Fashoid" fontsize="23px" />
        </FashoidHead> */}

        {/* <FashSubHead>
            <BodyText
                txt="Click on the door to proceed"
                color="white"
            />
        </FashSubHead> */}

        {/* <EnterHere>
            <BodyText txt="Enter Here" />
        </EnterHere> */}


        {/* <CarCont>
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
        </CarCont> */}


    </HomeCont>
}