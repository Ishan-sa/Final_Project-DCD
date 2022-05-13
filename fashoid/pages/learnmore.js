import styled from "styled-components";
import Img from "../comps/image";
import Background from "../comps/background";
import { useRouter } from 'next/router';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import { topToBottom, SlideRightDiff, Drop } from "../data/animations";
import { Slide } from "@mui/material";

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
  box-shadow: 2px 2px 5px rgb(31 31 31/0.6);
  animation: ${Drop} 3s;
`
const Home = styled(HomeIcon)`
    color: #333;
    height: 40px;
    width: auto;
    position: absolute;
    margin: 15px 0px 0px 330px;
    cursor: pointer;
    animation: ${topToBottom} 1s;
`
const Back = styled(ArrowBackIosSharpIcon)`
    position: absolute;
    margin: 20px 320px 0px 0px;
    height: 30px;
    width: auto;
    color: #333;
    cursor: pointer;
    animation: ${topToBottom} 1s;
`
const LearnMoreCont = styled.div`
  animation: ${SlideRightDiff} 1.5s;
`

export default function LearnMore() {

  const r = useRouter();

  return <MainCont>
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
    <Background img="/Home_bg.svg" />
    <LearnMoreCont>
      <Img img="/learnmoreguy.svg" w="290" h="230" />
    </LearnMoreCont>

    <VideoCont width="560" height="315" src="https://www.youtube.com/embed/fR7bXsoNwwE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></VideoCont>

    <HomeBut src="/homebutton.svg" onClick={() => r.push("/")} />
  </MainCont>
}
