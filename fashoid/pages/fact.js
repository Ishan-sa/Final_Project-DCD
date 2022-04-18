import Background from "../comps/background";
import Img from "../comps/image";
import styled from "styled-components";
import Button from "../comps/button";
import BodyText from "../comps/text-content";
import { useRouter } from 'next/router';
import { GetQuantity } from "../data/data"


const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`
const Water2Jeans = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10px 10px 0px;
    margin-top: 80px; 
`;

const WaterText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 0px 10px 0px;
`;

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
  margin-top: 30px;
  `;


export default function WwFact() {

  const r = useRouter();
  const gq = GetQuantity();

  if (gq === 1) {
    return <MainCont>
      <Background img="/Home_bg.svg" />
      <Water2Jeans>
        <Img img="/Jean.svg" w="90" h="115" p="50px 0px 50px 0px" />
        =
        <Img img="/Drop.svg" w="90" h="115" p="50px 0px 50px 0px" />
      </Water2Jeans>

      <WaterText>
        <div>{gq} pair of jeans</div>
        <BodyText txt="7,500 Litres" />
      </WaterText>


      <StartBtn onClick={
        () => r.push("/factory")
      }>Make Jeans</StartBtn>
    </MainCont>
  }

  if (gq === 2) {
    return <MainCont>
      <Background img="/Home_bg.svg" />
      <Water2Jeans>
        <Img img="/Jean.svg" w="90" h="115" p="50px 0px 50px 0px" />
        =
        <Img img="/Drop.svg" w="90" h="115" p="50px 0px 50px 0px" />
      </Water2Jeans>

      <WaterText>
        <div>{gq} pair of jeans</div>
        <BodyText txt="15,000 Litres" />
      </WaterText>


      <StartBtn onClick={
        () => r.push("/factory")
      }>Make Jeans</StartBtn>
    </MainCont>
  }

  if (gq === 3) {
    return <MainCont>
      <Background img="/Home_bg.svg" />
      <Water2Jeans>
        <Img img="/Jean.svg" w="90" h="115" p="50px 0px 50px 0px" />
        =
        <Img img="/Drop.svg" w="90" h="115" p="50px 0px 50px 0px" />
      </Water2Jeans>

      <WaterText>
        <div>{gq} pair of jeans</div>
        <BodyText txt="22,500 Litres" />
      </WaterText>


      <StartBtn onClick={
        () => r.push("/factory")
      }>Make Jeans</StartBtn>
    </MainCont>
  }

  if (gq === 4) {
    return <MainCont>
      <Background img="/Home_bg.svg" />
      <Water2Jeans>
        <Img img="/Jean.svg" w="90" h="115" p="50px 0px 50px 0px" />
        =
        <Img img="/Drop.svg" w="90" h="115" p="50px 0px 50px 0px" />
      </Water2Jeans>

      <WaterText>
        <div>{gq} pair of jeans</div>
        <BodyText txt="30,000 Litres" />
      </WaterText>


      <StartBtn onClick={
        () => r.push("/factory")
      }>Make Jeans</StartBtn>
    </MainCont>
  }

  // only up to 4 pairs

  if (gq > 4) {
    return <MainCont>
      <Background img="/Home_bg.svg" />
      <Water2Jeans>
        <Img img="/bruhgirl.svg" w="250" h="250" p="50px 0px 50px 0px" />
      </Water2Jeans>
      <h2> What!? you want {gq} pairs?</h2>
      <BodyText txt="we only have 4 in stock" />


      <StartBtn onClick={
        () => r.push("/QtySelectShirts")
      }>Try Again</StartBtn>
    </MainCont>
  }

  // if user types in 0 or less

  if (gq <= 0) {
    return <MainCont>
      <Background img="/Home_bg.svg" />
      <Water2Jeans>
        <Img img="/bruhgirl.svg" w="250" h="250" p="50px 0px 50px 0px" />
      </Water2Jeans>
      <h2>{gq} pairs!? You are very eco-friendly</h2>
      <BodyText txt="they are literally free just get some" />
      <StartBtn onClick={
        () => r.push("/QtySelectShirts")
      }>Try Again</StartBtn>
    </MainCont>
  }
}