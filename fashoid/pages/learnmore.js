import styled from "styled-components";
import Img from "../comps/image";
import Background from "../comps/background";
import { useRouter } from 'next/router';

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const HomeBut = styled.img`
  cursor: pointer;
  width: 50px;
  height: 50px;
  margin-top: 120px;
`;

const VideoCont = styled.iframe`
  width: 356px;
  height: 220px;
  border: 0;
  margin-top: 40px;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgb(31 31 31/0.6)
`

export default function LearnMore() {

  const r = useRouter();

  return <MainCont>
    <Background img="/Home_bg.svg" />
    <Img img="/learnmoreguy.svg" w="290" h="230" />

    <VideoCont width="560" height="315" src="https://www.youtube.com/embed/fR7bXsoNwwE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></VideoCont>

    <HomeBut src="/homebutton.svg" onClick={() => r.push("/")} />
  </MainCont>
}
