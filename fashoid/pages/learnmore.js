import styled from "styled-components";
import Img from "../comps/image";
import Background from "../comps/background";
import { useRouter } from 'next/router';
import VideoPlayer from "../comps/videoplayer";

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`

const HomeBut = styled.img`
cursor: pointer;
padding: 40px 0px 20px 0px;
`;

export default function LearnMore(){

    const r = useRouter();

    return <MainCont>
        <Background img="/Home_bg.svg"></Background>
        <Img img="/learnmoreguy.svg" w="290" h="230"/>
        <VideoPlayer></VideoPlayer>
        <HomeBut src="/homebutton.svg" onClick={() => r.push("/")}/>
    </MainCont>
}
