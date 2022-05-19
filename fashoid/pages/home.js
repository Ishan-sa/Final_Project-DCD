import styled from "styled-components";
import Head1 from "../comps/heading";
import Img from "../comps/image";
import BodyText from "../comps/text-content";
import Background from "../comps/background";
import { useRouter } from 'next/router';
import { topToBottom, fadeIn, SlideInRight, SlideInLeft } from "../data/animations";


const StartBtn = styled.button`
  background-color: #19AFF0;
  width: 276px;
  height: 40px;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  border: 0;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  margin-top: 20px;
  margin-bottom: 20px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='7.41' height='12' viewBox='0 0 7.41 12'%3E%3Cpath d='M10,6,8.59,7.41,13.17,12,8.59,16.59,10,18l6-6Z' transform='translate(-8.59 -6)' fill='%23fff'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 24px center;
  &:hover{
    background-color: black;
    transition: 0.5s;
  }
`

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  animation: ${topToBottom} 1s;
`

const SlideInRightDivCont = styled.div`
  animation: ${SlideInRight};
  animation-duration: 1s;
  display: flex;
  justify-content: center;
  width: 100vw;
`
const SlideInLeftDivCont = styled.div`
  animation: ${SlideInLeft};
  animation-duration: 1s;
  display: flex;
  justify-content: center;
  width: 100vw;
`

export default function Main() {

  const r = useRouter();

  return <MainCont>
    <Background img="/Home_bg.svg" />
    <SlideInRightDivCont>
      <Head1 txt="What is Fashoid?" />
    </SlideInRightDivCont>
    <SlideInLeftDivCont>
      <Img
        img="/GirlThinking.svg"
        w="65"
        h="150"
        padding="10px 0px 0px 0px"
      />
    </SlideInLeftDivCont>
    <SlideInRightDivCont>
      <BodyText margin="0px 50px 0px 50px" padding="30px 20px 15px 20px" txt={<>
        <b>Fashoid</b> is a web app that has the goal of letting its users know how much resources it takes to make a set of clothing such as Jeans and a T-shirt. It also teaches its users the downsides of <b>fast fashion</b> and<br /> <b>over-consumption</b>.
      </>} />
    </SlideInRightDivCont>

    <SlideInRightDivCont>
      <BodyText margin="0px 50px 0px 30px" padding="30px 30px 20px 50px" txt="The app will take you through the production process that is common for most fast fashion brands." />
    </SlideInRightDivCont>

    <SlideInLeftDivCont>
      <Img
        img="/startdiagram.svg"
        w="320.11"
        h="109"
        padding="15px 15px 80px 15px"
      />
    </SlideInLeftDivCont>

    {/* <SlideInRightDivCont>
      <StartBtn className="StartBtn" onClick={
        () => r.push("/start")
      }>Click to enter simulation</StartBtn>
    </SlideInRightDivCont> */}

    <SlideInRightDivCont>
      <nav>
        <ul>
          <li onClick={
            () => r.push("/start")
          }>
            Click here to enter simulation
            <span></span><span></span><span></span><span></span>
          </li>
        </ul>
      </nav>
    </SlideInRightDivCont>


  </MainCont >
}