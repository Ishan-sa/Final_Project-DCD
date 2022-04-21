import styled from "styled-components";
import Head1 from "../comps/heading";
import Img from "../comps/image";
import BodyText from "../comps/text-content";
import Background from "../comps/background";
import { useRouter } from 'next/router';


const StartBtn = styled.button`
  background-color: #96A96F;
  width: 276px;
  height: 40px;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  border: 0;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  margin-top: 20px;
  margin-bottom: 20px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='7.41' height='12' viewBox='0 0 7.41 12'%3E%3Cpath d='M10,6,8.59,7.41,13.17,12,8.59,16.59,10,18l6-6Z' transform='translate(-8.59 -6)' fill='%23fff'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 24px center;
`

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`

export default function Main() {

  const r = useRouter();

  return <MainCont>
    <Background img="/Home_bg.svg" />
    <Head1 txt="What is Fashoid?" />
    <Img
      img="/GirlThinking.svg"
      w="65.61"
      h="188.01"
    />

    <BodyText padding="0px 15px 0px 15px" txt={<>
      <b>Fashoid</b> is a web app that has the goal of letting its users know how much resources it takes to make a set of clothing such as Jeans and a T-shirt. It also teaches its users the downsides of <b>fast fashion</b> and <b>over-consumption</b>.
    </>} />
    <BodyText txt="The app will take you through the production process that is common for most fast fashion brands." />

    <Img
      img="/Jean.svg"
      w="81.02"
      h="103"
    />

    <Img
      img="/Down_arrow.svg"
      w="20"
      h="22"
    />

    <Img
      img="/Drop.svg"
      w="50.45"
      h="74.28"
    />

    <Img
      img="/Down_arrow.svg"
      w="20"
      h="22"
    />

    <Img
      img="/Factory.svg"
      w="96.11"
      h="101.76"
    />

    <StartBtn onClick={
      () => r.push("/start")
    }>Click to enter simulation</StartBtn>

  </MainCont >
}