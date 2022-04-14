import Background from "../comps/background";
import Img from "../comps/image";
import styled from "styled-components";



export default function Store() {
    return <div>
    <Background img="/Home_bg.svg" />
    <Img img="/storelady.svg" w="300" h="300"/>
    <Img img="/lightlines.svg" w="390" h="9"/>
    <Img img="/lightbar.svg" w="390" h="100" />
    <Img img="/cabinet.svg" w="296" h="464" />
    <Img img="/jeans3.svg"/>
    <Img img="/topsrack.svg" w="342" h="189" />


    </div>
}