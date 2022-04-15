import Background from "../comps/background";
import Img from "../comps/image";
import styled from "styled-components";


export default function Store() {
    return <div>
    <Background img="/Home_bg.svg" />
    <Img img="/storelady.svg" w="300" h="300"/>
    <Img img="/lightlines.svg" w="390" h="9" padding="0px 0px 0px 0px"/>
    <Img img="/lightbar.svg" w="390" h="100" padding="0px 0px 0px 0px"/>
    <div w="296" h="464">
        <Img img="/cabinet.svg" w="296" h="464" />
        <Img img="/jeanshat.svg" w="221" h="37" po="relative"/>
        <Img img="/foldedjeans.svg" w="221" h="37" po="relative"/>
        <Img img="/jeans3.svg" w="213.67" h="179.41" po="relative"/>
    </div>
    <Img img="/topsrack.svg" w="342" h="189"/>
    </div>
}