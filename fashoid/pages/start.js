import styled from "styled-components";
import { useRouter } from "next/router";
import Background from "../comps/background";
import BodyText from "../comps/text-content";
import Img from "../comps/image";
import Image from "next/image";

const FashoidHead = styled.div`
    position: absolute;
    font-size: 24px;
    font-weight: 600;
    top: 239px;
    left: 155px;
`
const FashSubHead = styled.div`
    position: absolute;
    font-size: 15px;
    top: 274px;
    left: 87px;
`
const EnterHere = styled.div`
    position: absolute;
    font-size: 16px;
    top: 389px;
    left: 229px;
    transform: rotate(-9.53deg);
`
const Cursor = styled.div`
    position: absolute;
    left: 73.85%;
    top: 51.8%;
`

export default function Start() {
    const r = useRouter();

    return <div>
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
            () => r.push("/QtySelect")
        }>
            <Img
                img="/Pointer.svg"
                w="34"
                h="37.09"
            />
        </Cursor>


    </div>
}