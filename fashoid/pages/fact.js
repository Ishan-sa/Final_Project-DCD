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
  width: 100vw;
  padding-top: 150px;
  margin-top: 80px;
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
const Home = styled(HomeIcon)`
  color: #333;
  height: 40px;
  width: auto;
  position: relative;
  cursor: pointer;
  animation: ${topToBottom} 1s;
`
const Back = styled(ArrowBackIosSharpIcon)`
  position: relative;
  height: 30px;
  width: auto;
  color: #333;
  cursor: pointer;
  animation: ${topToBottom} 1s;
`
const Shirts = styled.div`
  display: flex;
  text-align: center;
`
const NavBtns = styled.div`
  width: 74vw;
  display: flex;
  padding: 20px 0px 0px 0px;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
`
const TshirtLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const TshirtMid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const TshirtRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const AllTshirtsCont = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0.5;
  width: 100vw;
  justify-content: space-around;
`
const Leftjeans = styled.div`
  display: flex;
  flex-direction: column;
`
const MidJeans = styled.div`
  display: flex;
  flex-direction: column;
`
const RightJeans = styled.div`
  display: flex;
  flex-direction: column;
`
const AllJeansCont = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 150px;
  padding-bottom: 50px;
  width: 80vw;
  justify-content: space-around;
  align-items: center;
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
      <Background img="/Home_bg.svg" />
      <NavBtns>
        <Back
          onClick={
            () => r.back("")
          }
        />
        <Home
          onClick={
            () => r.push("/home")
          }
        />
      </NavBtns>

      <AllJeansCont data-aos="flip-down">
        <Leftjeans>
          <Img
            img="/Jean.svg"
            w="65" h="115"
            padding="0px 0px 0px 0px"
          />
          <BodyText padding="0px 0px 0px 12px" txt={<>
            {gq} pair of jeans
          </>} />
        </Leftjeans>

        <MidJeans>
          <Img
            img="/equals.svg" w="20"
          />
        </MidJeans>

        <RightJeans>
          <Img
            img="/Drop.svg"
            w="65" h="115"
            padding="0px 0px 0px 0px"
          />
          <BodyText txt="7,500 Litres" />
        </RightJeans>
      </AllJeansCont>


      <StartBtn
        data-aos="slide-right"
        onClick={
          () => r.push("/factory")
        }>Make Jeans</StartBtn>
    </MainCont>
  }

  if (gq === 2 && gt == "jeans") {
    return <MainCont>
      <Background img="/Home_bg.svg" />
      <NavBtns>
        <Back
          onClick={
            () => r.back("")
          }
        />
        <Home
          onClick={
            () => r.push("/home")
          }
        />
      </NavBtns>
      <AllJeansCont data-aos="flip-down">
        <Leftjeans>
          <Img
            img="/Jean.svg"
            w="65" h="115"
            padding="0px 0px 0px 0px"
          />
          <BodyText padding="0px 0px 0px 12px" txt={<>
            {gq} pair of jeans
          </>} />
        </Leftjeans>

        <MidJeans>
          <Img
            img="/equals.svg" w="20"
          />
        </MidJeans>

        <RightJeans>
          <Img
            img="/Drop.svg"
            w="65" h="115"
            padding="0px 0px 0px 0px"
          />
          <BodyText txt="15,000 Litres" />
        </RightJeans>
      </AllJeansCont>


      <StartBtn
        data-aos="slide-right"
        onClick={
          () => r.push("/factory")
        }>Make Jeans</StartBtn>
    </MainCont>
  }

  if (gq === 3 && gt == "jeans") {
    return <MainCont>
      <Background img="/Home_bg.svg" />
      <NavBtns>
        <Back
          onClick={
            () => r.back("")
          }
        />
        <Home
          onClick={
            () => r.push("/home")
          }
        />
      </NavBtns>

      <AllJeansCont data-aos="flip-down">
        <Leftjeans>
          <Img
            img="/Jean.svg"
            w="65" h="115"
            padding="0px 0px 0px 0px"
          />
          <BodyText padding="0px 0px 0px 12px" txt={<>
            {gq} pair of jeans
          </>} />
        </Leftjeans>

        <MidJeans>
          <Img
            img="/equals.svg" w="20"
          />
        </MidJeans>

        <RightJeans>
          <Img
            img="/Drop.svg"
            w="65" h="115"
            padding="0px 0px 0px 0px"
          />
          <BodyText txt="22,500 Litres" />
        </RightJeans>
      </AllJeansCont>


      <StartBtn
        data-aos="slide-right"
        onClick={
          () => r.push("/factory")
        }>Make Jeans</StartBtn>
    </MainCont>
  }

  if (gq === 4 && gt == "jeans") {
    return <MainCont>
      <Background img="/Home_bg.svg" />
      <NavBtns>
        <Back
          onClick={
            () => r.back("")
          }
        />
        <Home
          onClick={
            () => r.push("/home")
          }
        />
      </NavBtns>
      <AllJeansCont data-aos="flip-down">
        <Leftjeans>
          <Img
            img="/Jean.svg"
            w="65" h="115"
            padding="0px 0px 0px 0px"
          />
          <BodyText padding="0px 0px 0px 12px" txt={<>
            {gq} pair of jeans
          </>} />
        </Leftjeans>

        <MidJeans>
          <Img
            img="/equals.svg" w="20"
          />
        </MidJeans>

        <RightJeans>
          <Img
            img="/Drop.svg"
            w="65" h="115"
            padding="0px 0px 0px 0px"
          />
          <BodyText txt="30,000 Litres" />
        </RightJeans>
      </AllJeansCont>


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
      <Background img="/Home_bg.svg" />
      <NavBtns>
        <Back
          onClick={
            () => r.back("")
          }
        />
        <Home
          onClick={
            () => r.push("/home")
          }
        />
      </NavBtns>
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
      <NavBtns>
        <Back
          onClick={
            () => r.back("")
          }
        />
        <Home
          onClick={
            () => r.push("/home")
          }
        />
      </NavBtns>
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
      <NavBtns>
        <Back
          onClick={
            () => r.back("")
          }
        />
        <Home
          onClick={
            () => r.push("/home")
          }
        />
      </NavBtns>

      <AllTshirtsCont data-aos="flip-down">
        <TshirtLeft>
          <Img img="/tshirt.svg" padding="0px 0px 10px 0px" />
          <BodyText padding="0px 0px 40px 0px" txt={<>
            {gq} T-Shirt
          </>} />
          <BodyText txt="2.6 kg of CO2" padding="30px 0px 0px 0px" />
        </TshirtLeft>

        <TshirtMid>
          <Img img="/equals.svg" w="20" padding="50px 0px 0px 0px" />
          <Img img="/equals.svg" w="20" padding="50px 0px 0px 0px" />
        </TshirtMid>

        <TshirtRight>
          <Img img="/Drop.svg" padding="20px 0px 10px 0px" />
          <BodyText txt="7000 Litres" padding="0px 0px 30px 0px" />
          <Img img="/carco2.svg" w="100" h="90" padding="0px 0px 0px 0px" />
        </TshirtRight>
      </AllTshirtsCont>


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
      <Background img="/Home_bg.svg" />
      <NavBtns>
        <Back
          onClick={
            () => r.back("")
          }
        />
        <Home
          onClick={
            () => r.push("/home")
          }
        />
      </NavBtns>
      <AllTshirtsCont data-aos="flip-down">
        <TshirtLeft>
          <Img img="/tshirt.svg" padding="0px 0px 10px 0px" />
          <BodyText padding="0px 0px 40px 0px" txt={<>
            {gq} T-Shirts
          </>} />
          <BodyText txt="5.2 kg of CO2" padding="30px 0px 0px 0px" />
        </TshirtLeft>

        <TshirtMid>
          <Img img="/equals.svg" w="20" padding="50px 0px 0px 0px" />
          <Img img="/equals.svg" w="20" padding="50px 0px 0px 0px" />
        </TshirtMid>

        <TshirtRight>
          <Img img="/Drop.svg" padding="20px 0px 10px 0px" />
          <BodyText txt="14,000 Litres" padding="0px 0px 30px 0px" />
          <Img img="/carco2.svg" w="100" h="90" padding="0px 0px 0px 0px" />
        </TshirtRight>
      </AllTshirtsCont>

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
      <Background img="/Home_bg.svg" />
      <NavBtns>
        <Back
          onClick={
            () => r.back("")
          }
        />
        <Home
          onClick={
            () => r.push("/home")
          }
        />
      </NavBtns>
      <AllTshirtsCont data-aos="flip-down">
        <TshirtLeft>
          <Img img="/tshirt.svg" padding="0px 0px 10px 0px" />
          <BodyText padding="0px 0px 40px 0px" txt={<>
            {gq} T-Shirts
          </>} />
          <BodyText txt="7.8 kg of CO2" padding="30px 0px 0px 0px" />
        </TshirtLeft>

        <TshirtMid>
          <Img img="/equals.svg" w="20" padding="50px 0px 0px 0px" />
          <Img img="/equals.svg" w="20" padding="50px 0px 0px 0px" />
        </TshirtMid>

        <TshirtRight>
          <Img img="/Drop.svg" padding="20px 0px 10px 0px" />
          <BodyText txt="21,000 Litres" padding="0px 0px 30px 0px" />
          <Img img="/carco2.svg" w="100" h="90" padding="0px 0px 0px 0px" />
        </TshirtRight>
      </AllTshirtsCont>

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
      <Background img="/Home_bg.svg" />
      <NavBtns>
        <Back
          onClick={
            () => r.back("")
          }
        />
        <Home
          onClick={
            () => r.push("/home")
          }
        />
      </NavBtns>
      <AllTshirtsCont data-aos="flip-down">
        <TshirtLeft>
          <Img img="/tshirt.svg" padding="0px 0px 10px 0px" />
          <BodyText padding="0px 0px 40px 0px" txt={<>
            {gq} T-Shirts
          </>} />
          <BodyText txt="10.4 kg of CO2" padding="30px 0px 0px 0px" />
        </TshirtLeft>

        <TshirtMid>
          <Img img="/equals.svg" w="20" padding="50px 0px 0px 0px" />
          <Img img="/equals.svg" w="20" padding="50px 0px 0px 0px" />
        </TshirtMid>

        <TshirtRight>
          <Img img="/Drop.svg" padding="20px 0px 10px 0px" />
          <BodyText txt="28,000 Litres" padding="0px 0px 30px 0px" />
          <Img img="/carco2.svg" w="100" h="90" padding="0px 0px 0px 0px" />
        </TshirtRight>
      </AllTshirtsCont>

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
      <NavBtns>
        <Back
          onClick={
            () => r.back("")
          }
        />
        <Home
          onClick={
            () => r.push("/home")
          }
        />
      </NavBtns>
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
      <NavBtns>
        <Back
          onClick={
            () => r.back("")
          }
        />
        <Home
          onClick={
            () => r.push("/home")
          }
        />
      </NavBtns>
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