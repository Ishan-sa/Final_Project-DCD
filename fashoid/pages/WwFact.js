import Background from "../comps/background";
import Img from "../comps/image";
import styled from "styled-components";
import Button from "../comps/button";
import { useRouter } from 'next/router';

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
`;

const WaterText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10px 10px 0px;
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
  `;


export default function WwFact(){

    const r = useRouter();

    return <MainCont>
    <Background img="/Home_bg.svg" />
    <Water2Jeans>
        <Img img="/Jean.svg" w="90" h="115"/>
            =
        <Img img="/Drop.svg" w="90" h="115"/>
    </Water2Jeans>

    <WaterText>
    
    </WaterText>

    <StartBtn onClick={
      () => r.push("/store")
    }>Make Jeans</StartBtn>
    </MainCont>
}