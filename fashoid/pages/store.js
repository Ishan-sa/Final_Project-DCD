import Background from "../comps/background";
import Img from "../comps/image";
import styled from "styled-components";
import { useRouter } from 'next/router';

const Cabinet = styled.div`
    position: relative;
    top: 20px;
`;

const Clothing = styled.div`
    position: absolute;
    top: 55px; 
    left: 35px;
`;

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`

export default function Store() {
    const r = useRouter();

    return <MainCont>
        <Background img="/Home_bg.svg" />
        <Img img="/storelady.svg" w="300" h="300" />
        <Img img="/lightlines.svg" w="390" h="9" padding="0px 0px 0px 0px" />
        <Img img="/lightbar.svg" w="390" h="100" padding="0px 0px 0px 0px" />

        <Cabinet w="296" h="464">
            <Img img="/cabinet.svg" w="296" h="464" />
            <Clothing onClick={
                () => r.push("/QtySelect")
            }>
                <Img img="/jeanshat.svg" w="221" h="37" po="absolute" />
                <Img img="/foldedjeans.svg" w="221" h="37" po="absolute" />
                <Img img="/jeans3.svg" w="213.67" h="179.41" po="absolute" />
            </Clothing>
        </Cabinet>

        <Img img="/topsrack.svg" w="342" h="189" />
    </MainCont>
}