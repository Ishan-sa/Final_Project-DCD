import Background from "../comps/background";
import Img from "../comps/image";
import styled from "styled-components";
import Button from "../comps/button";
import BodyText from "../comps/text-content";
import { useRouter } from 'next/router';
import { GetQuantity, GetType } from "../data/data";
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import { topToBottom } from "../data/animations";
import { useEffect } from "react"
import "aos/dist/aos.css";
import Aos from "aos";


const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  animation: ${topToBottom} 1s;
`
const ShirtsCont = styled.div`
  display: flex;
  flex-direction: column;
  justidy-content: center;
  align-items: center;
  position: relative;
  bottom: 150px;
`
const Water2Jeans = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  padding-top: 150px;
  margin-top: 80px;
`

const WaterText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 20px;
`

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
`

const H2 = styled.h2`
  text-align: center;
`

const CarCo2 = styled.div`
  display: flex;
  justify-content: space-equally;
  flex-direction: row;
  width: 100%;
  height: auto;
  align-items: center;
  padding-bottom: 30px;
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
  z-index: 999;
`
const Shirts = styled.div`
  display: flex;
  text-align: center;
`


export default function WwFact() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const r = useRouter();
  const gq = GetQuantity();
  const gt = GetType();

  ///////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////// for jeans
  //////////////////////////////////////////////////////////////////////////////////////////////////

  if (gq === 1 && gt == "jeans") {
    return <MainCont>
      <Home
        onClick={
          () => r.push("/")
        }
      />
      <Back
        onClick={
          () => r.push("/QtySelect")
        }
      />
      <Background img="/Home_bg.svg" />
      <Water2Jeans data-aos="zoom-out">
        <Img img="/Jean.svg" w="65" h="115" p="50px 0px 50px 0px" />
        <Img img="/equals.svg" w="20" />
        <Img img="/Drop.svg" w="65" h="115" p="50px 0px 50px 0px" />
      </Water2Jeans>

      <WaterText data-aos="zoom-out">
        <BodyText padding="0px 0px 0px 12px" txt={<>
          {gq} pair of jeans
        </>} />
        <BodyText txt="7,500 Litres" />
      </WaterText>


      <StartBtn
        data-aos="slide-right"
        onClick={
          () => r.push("/factory")
        }>Make Jeans</StartBtn>
    </MainCont>
  }

  if (gq === 2 && gt == "jeans") {
    return <MainCont>
      <Home
        onClick={
          () => r.push("/")
        }
      />
      <Back
        onClick={
          () => r.push("/QtySelect")
        }
      />
      <Background img="/Home_bg.svg" />
      <Water2Jeans data-aos="zoom-out">
        <Img img="/Jean.svg" w="65" h="115" p="50px 0px 50px 0px" />
        <Img img="/equals.svg" w="20" />
        <Img img="/Drop.svg" w="65" h="115" p="50px 0px 50px 0px" />
      </Water2Jeans>

      <WaterText data-aos="zoom-out">
        <BodyText padding="0px 0px 0px 12px" txt={<>
          {gq} pair of jeans
        </>} />
        <BodyText txt="15,000 Litres" />
      </WaterText>


      <StartBtn
        data-aos="slide-right"
        onClick={
          () => r.push("/factory")
        }>Make Jeans</StartBtn>
    </MainCont>
  }

  if (gq === 3 && gt == "jeans") {
    return <MainCont>
      <Home
        onClick={
          () => r.push("/")
        }
      />
      <Back
        onClick={
          () => r.push("/QtySelect")
        }
      />
      <Background img="/Home_bg.svg" />
      <Water2Jeans data-aos="zoom-out">
        <Img img="/Jean.svg" w="65" h="115" p="50px 0px 50px 0px" />
        <Img img="/equals.svg" w="20" />
        <Img img="/Drop.svg" w="65" h="115" p="50px 0px 50px 0px" />
      </Water2Jeans>

      <WaterText data-aos="zoom-out">
        <BodyText padding="0px 0px 0px 12px" txt={<>
          {gq} pair of jeans
        </>} />
        <BodyText txt="22,500 Litres" />
      </WaterText>


      <StartBtn
        data-aos="slide-right"
        onClick={
          () => r.push("/factory")
        }>Make Jeans</StartBtn>
    </MainCont>
  }

  if (gq === 4 && gt == "jeans") {
    return <MainCont>
      <Home
        onClick={
          () => r.push("/")
        }
      />
      <Back
        onClick={
          () => r.push("/QtySelect")
        }
      />
      <Background img="/Home_bg.svg" />
      <Water2Jeans data-aos="zoom-out">
        <Img img="/Jean.svg" w="65" h="115" p="50px 0px 50px 0px" />
        <Img img="/equals.svg" w="20" />
        <Img img="/Drop.svg" w="65" h="115" p="50px 0px 50px 0px" />
      </Water2Jeans>

      <WaterText data-aos="zoom-out">
        <BodyText padding="0px 0px 0px 12px" txt={<>
          {gq} pair of jeans
        </>} />
        <BodyText txt="30,000 Litres" />
      </WaterText>


      <StartBtn
        data-aos="slide-right"
        onClick={
          () => r.push("/factory")
        }>Make Jeans</StartBtn>
    </MainCont>
  }

  // only up to 4 pairs

  if (gq > 4 && gt == "jeans") {
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
      <div data-aos="zoom-out">
        <Img img="/bruhgirl.svg" w="250" h="250" p="50px 0px 50px 0px" />
      </div>
      <H2 data-aos="slide-right"> What!? <br /> You want {gq} pairs?</H2>
      <div data-aos="slide-left">
        <BodyText txt="We only have 4 in stock" />
      </div>


      <StartBtn
        data-aos="slide-right"
        onClick={
          () => r.push("/QtySelect")
        }>Try Again</StartBtn>
    </MainCont>
  }

  // if user types in 0 or less

  if (gq <= 0 && gt == "jeans") {
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
      <div data-aos="zoom-out">
        <Img img="/bruhgirl.svg" w="250" h="250" p="50px 0px 50px 0px" />
      </div>
      <H2 data-aos="slide-right">{gq} pairs!? <br /> You are very eco-friendly</H2>
      <div data-aos="slide-left">
        <BodyText txt="They are literally free, just get some." />
      </div>
      <StartBtn
        data-aos="slide-right"
        onClick={
          () => r.push("/QtySelect")
        }>Try Again</StartBtn>
    </MainCont>
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////// for shirts
  //////////////////////////////////////////////////////////////////////////////////////////////////

  if (gq === 1 && gt == "shirts") {
    return <MainCont>
      <Background img="/Home_bg.svg" />
      <Home
        onClick={
          () => r.push("/")
        }
      />
      <Back
        onClick={
          () => r.push("/QtySelect")
        }
      />
      <Water2Jeans data-aos="zoom-out">
        <Img img="/tshirt.svg" w="90" h="115" />
        <Img img="/equals.svg" w="20" />
        <Img img="/Drop.svg" w="65" h="115" />
      </Water2Jeans>

      <WaterText data-aos="zoom-out">
        <BodyText padding="0px 0px 0px 12px" txt={<>
          {gq} T-Shirt
        </>} />
        <BodyText margin="0px 0px 0px 100px" txt="7000 Litres" />
      </WaterText>

      <CarCo2 data-aos="zoom-out">
        <BodyText width="50%" txt="2.6 kg of CO2" />
        <Img img="/equals.svg" w="20" padding="0px 0px 0px 0px" margin="0px 0px 0px 0px" />
        <Img img="/carco2.svg" w="100" h="90" padding="0px 0px 0px 50px" margin="0px 0px 0px 0px" />
      </CarCo2>

      <div data-aos="slide-left">
        <BodyText
          padding="0px 15px 0px 15px"
          txt="Equivalent to driving 14km in a standard vehicle"
        />
      </div>


      <StartBtn
        data-aos="slide-right"
        onClick={
          () => r.push("/factory")
        }>Make T-shirt</StartBtn>
    </MainCont>
  }

  if (gq === 2 && gt == "shirts") {
    return <MainCont>
      <Home
        onClick={
          () => r.push("/")
        }
      />
      <Back
        onClick={
          () => r.push("/QtySelect")
        }
      />
      <Background img="/Home_bg.svg" />
      <Water2Jeans data-aos="zoom-out">
        <Img img="/tshirt.svg" w="90" h="115" />
        <Img img="/equals.svg" w="20" />
        <Img img="/Drop.svg" w="65" h="115" />
      </Water2Jeans>

      <WaterText data-aos="zoom-out">
        <BodyText padding="0px 0px 0px 12px" txt={<>
          {gq} T-Shirts
        </>} />
        <BodyText margin="0px 0px 0px 100px" txt="14,000 Litres" />
      </WaterText>

      <CarCo2 data-aos="zoom-out">
        <BodyText width="50%" txt="5.2 kg of CO2" />
        <Img img="/equals.svg" w="20" padding="0px 0px 0px 0px" margin="0px 0px 0px 0px" />
        <Img img="/carco2.svg" w="100" h="90" padding="0px 0px 0px 50px" margin="0px 0px 0px 0px" />
      </CarCo2>
      <div data-aos="slide-left">
        <BodyText padding="0px 15px 0px 15px" txt="Equivalent to driving 28km in a standard vehicle" />
      </div>


      <StartBtn
        data-aos="slide-right"
        onClick={
          () => r.push("/factory")
        }>Make T-shirt</StartBtn>
    </MainCont>
  }

  if (gq === 3 && gt == "shirts") {
    return <MainCont>
      <Home
        onClick={
          () => r.push("/")
        }
      />
      <Back
        onClick={
          () => r.push("/QtySelect")
        }
      />
      <Background img="/Home_bg.svg" />
      <Water2Jeans data-aos="zoom-out">
        <Img img="/tshirt.svg" w="90" h="115" />
        <Img img="/equals.svg" w="20" />
        <Img img="/Drop.svg" w="65" h="115" />
      </Water2Jeans>

      <WaterText data-aos="zoom-out">
        <BodyText padding="0px 0px 0px 12px" txt={<>
          {gq} T-Shirts
        </>} />
        <BodyText margin="0px 0px 0px 100px" txt="21,000 Litres" />
      </WaterText>

      <CarCo2 data-aos="zoom-out">
        <BodyText width="50%" txt="7.8 kg of CO2" />
        <Img img="/equals.svg" w="20" padding="0px 0px 0px 0px" margin="0px 0px 0px 0px" />
        <Img img="/carco2.svg" w="100" h="90" padding="0px 0px 0px 50px" margin="0px 0px 0px 0px" />
      </CarCo2>

      <div data-aos="slide-left">
        <BodyText padding="0px 15px 0px 15px" txt="Equivalent to driving 42km in a standard vehicle" />
      </div>


      <StartBtn
        data-aos="slide-right"
        onClick={
          () => r.push("/factory")
        }>Make T-shirt</StartBtn>
    </MainCont>
  }

  if (gq === 4 && gt == "shirts") {
    return <MainCont>
      <Home
        onClick={
          () => r.push("/")
        }
      />
      <Back
        onClick={
          () => r.push("/QtySelect")
        }
      />
      <Background img="/Home_bg.svg" />
      <Water2Jeans data-aos="zoom-out">
        <Img img="/tshirt.svg" w="90" h="115" />
        <Img img="/equals.svg" w="20" />
        <Img img="/Drop.svg" w="65" h="115" />
      </Water2Jeans>

      <WaterText data-aos="zoom-out">
        <BodyText padding="0px 0px 0px 12px" txt={<>
          {gq} T-Shirts
        </>} />
        <BodyText margin="0px 0px 0px 100px" txt="28,000 Litres" />
      </WaterText>

      <CarCo2 data-aos="zoom-out">
        <BodyText width="50%" txt="10.4 kg of CO2" />
        <Img img="/equals.svg" w="20" padding="0px 0px 0px 0px" margin="0px 0px 0px 0px" />
        <Img img="/carco2.svg" w="100" h="90" padding="0px 0px 0px 50px" margin="0px 0px 0px 0px" />
      </CarCo2>
      <div data-aos="slide-left">
        <BodyText padding="0px 15px 0px 15px" txt="Equivalent to driving 56km in a standard vehicle." />
      </div>


      <StartBtn
        data-aos="slide-right"
        onClick={
          () => r.push("/factory")
        }>Make T-shirt</StartBtn>
    </MainCont>
  }

  // only up to 4 shirts

  if (gq > 4 && gt == "shirts") {
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
      <Water2Jeans data-aos="zoom-out">
        <Img img="/bruhgirl.svg" w="250" h="250" />
      </Water2Jeans>
      <h2 data-aos="slide-left"> What!? You want {gq} shirts?</h2>
      <div data-aos="slide-right">
        <BodyText txt="We only have 4 in stock" />
      </div>


      <StartBtn
        onClick={
          () => r.push("/QtySelect")
        }>Try Again</StartBtn>
    </MainCont>
  }

  // if user types in 0 or less

  if (gq <= 0 && gt == "shirts") {
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
      <ShirtsCont>
        <Water2Jeans data-aos="zoom-out">
          <Img img="/bruhgirl.svg" w="250" h="250" />
        </Water2Jeans>
        <Shirts>
          <h2 data-aos="slide-left">{gq} Shirts!? You are very eco-friendly</h2>
        </Shirts>
        <div data-aos="slide-right">
          <BodyText txt="They are literally free just get some" />
        </div>
        <StartBtn
          data-aos="slide-left"
          onClick={
            () => r.push("/QtySelect")
          }>Try Again</StartBtn>
      </ShirtsCont>
    </MainCont>
  }
}