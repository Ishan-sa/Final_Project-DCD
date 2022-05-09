import Background from "../comps/background";
import Img from "../comps/image";
import styled from "styled-components";
import BodyText from "../comps/text-content";
import { useRouter } from 'next/router';
import { GetQuantity } from "../data/data"

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`
const Water2Jeans = styled.div`
    display: flex;
    align-items: center;
    // flex-direction: column;
    justify-content: space-around;
    width: 100%;
    margin-top: 80px;
`;

const WaterText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 30px;
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

const CarCo2 = styled.div`
  display: flex;
  justify-content: space-equally;
  flex-direction: row;
  width: 100%;
  height: auto;
  align-items: center;
  padding-bottom: 30px;
`


export default function WwFact() {

  const r = useRouter();
  const gq = GetQuantity();

  if (gq === 1) {
    return <MainCont>
      <Background img="/Home_bg.svg" />
      <Water2Jeans>
        <Img img="/tshirt.svg" w="90" h="115" />
        <Img img="/equals.svg" w="20" />
        <Img img="/Drop.svg" w="65" h="115" />
      </Water2Jeans>

      <WaterText>
        <BodyText padding="0px 0px 0px 12px" txt={<>
          {gq} T-Shirt
        </>} />
        <BodyText margin="0px 0px 0px 100px" txt="7000 Litres" />
      </WaterText>

      <CarCo2>
        <BodyText width="50%" txt="2.6 kg of CO2" />
        <Img img="/equals.svg" w="20" padding="0px 0px 0px 0px" margin="0px 0px 0px 0px" />
        <Img img="/carco2.svg" w="100" h="90" padding="0px 0px 0px 50px" margin="0px 0px 0px 0px" />
      </CarCo2>

      <BodyText padding="0px 15px 0px 15px" txt="Equivalent to driving 14km in a standard vehicle" />


      <StartBtn onClick={
        () => r.push("/factory")
      }>Make T-shirt</StartBtn>
    </MainCont>
  }

  if (gq === 2) {
    return <MainCont>
      <Background img="/Home_bg.svg" />
      <Water2Jeans>
        <Img img="/tshirt.svg" w="90" h="115" />
        <Img img="/equals.svg" w="20" />
        <Img img="/Drop.svg" w="65" h="115" />
      </Water2Jeans>

      <WaterText>
        <BodyText padding="0px 0px 0px 12px" txt={<>
          {gq} T-Shirts
        </>} />
        <BodyText margin="0px 0px 0px 100px" txt="14,000 Litres" />
      </WaterText>

      <CarCo2>
        <BodyText width="50%" txt="5.2 kg of CO2" />
        <Img img="/equals.svg" w="20" padding="0px 0px 0px 0px" margin="0px 0px 0px 0px" />
        <Img img="/carco2.svg" w="100" h="90" padding="0px 0px 0px 50px" margin="0px 0px 0px 0px" />
      </CarCo2>

      <BodyText padding="0px 15px 0px 15px" txt="Equivalent to driving 28km in a standard vehicle" />


      <StartBtn onClick={
        () => r.push("/factory")
      }>Make T-shirt</StartBtn>
    </MainCont>
  }

  if (gq === 3) {
    return <MainCont>
      <Background img="/Home_bg.svg" />
      <Water2Jeans>
        <Img img="/tshirt.svg" w="90" h="115" />
        <Img img="/equals.svg" w="20" />
        <Img img="/Drop.svg" w="65" h="115" />
      </Water2Jeans>

      <WaterText>
        <BodyText padding="0px 0px 0px 12px" txt={<>
          {gq} T-Shirts
        </>} />
        <BodyText margin="0px 0px 0px 100px" txt="21,000 Litres" />
      </WaterText>

      <CarCo2>
        <BodyText width="50%" txt="7.8 kg of CO2" />
        <Img img="/equals.svg" w="20" padding="0px 0px 0px 0px" margin="0px 0px 0px 0px" />
        <Img img="/carco2.svg" w="100" h="90" padding="0px 0px 0px 50px" margin="0px 0px 0px 0px" />
      </CarCo2>

      <BodyText padding="0px 15px 0px 15px" txt="Equivalent to driving 42km in a standard vehicle" />


      <StartBtn onClick={
        () => r.push("/factory")
      }>Make T-shirt</StartBtn>
    </MainCont>
  }

  if (gq === 4) {
    return <MainCont>
      <Background img="/Home_bg.svg" />
      <Water2Jeans>
        <Img img="/tshirt.svg" w="90" h="115" />
        <Img img="/equals.svg" w="20" />
        <Img img="/Drop.svg" w="65" h="115" />
      </Water2Jeans>

      <WaterText>
        <BodyText padding="0px 0px 0px 12px" txt={<>
          {gq} T-Shirts
        </>} />
        <BodyText margin="0px 0px 0px 100px" txt="28,000 Litres" />
      </WaterText>

      <CarCo2>
        <BodyText width="50%" txt="10.4 kg of CO2" />
        <Img img="/equals.svg" w="20" padding="0px 0px 0px 0px" margin="0px 0px 0px 0px" />
        <Img img="/carco2.svg" w="100" h="90" padding="0px 0px 0px 50px" margin="0px 0px 0px 0px" />
      </CarCo2>

      <BodyText padding="0px 15px 0px 15px" txt="Equivalent to driving 56km in a standard vehicle." />


      <StartBtn onClick={
        () => r.push("/factory")
      }>Make T-shirt</StartBtn>
    </MainCont>
  }

  // only up to 4 shirts

  if (gq > 4) {
    return <MainCont>
      <Background img="/Home_bg.svg" />
      <Water2Jeans>
        <Img img="/bruhgirl.svg" w="250" h="250" />
      </Water2Jeans>
      <h2> What!? you want {gq} shirts?</h2>
      <BodyText txt="we only have 4 in stock" />


      <StartBtn onClick={
        () => r.push("/QtySelect")
      }>Try Again</StartBtn>
    </MainCont>
  }

  // if user types in 0 or less

  if (gq <= 0) {
    return <MainCont>
      <Background img="/Home_bg.svg" />
      <Water2Jeans>
        <Img img="/bruhgirl.svg" w="250" h="250" />
      </Water2Jeans>
      <h2>{gq} shirts!? You are very eco-friendly</h2>
      <BodyText txt="they are literally free just get some" />
      <StartBtn onClick={
        () => r.push("/QtySelect")
      }>Try Again</StartBtn>
    </MainCont>
  }
}