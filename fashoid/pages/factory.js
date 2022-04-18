import Background2 from "../comps/background";
import Background from "../comps/background";
import Img from "../comps/image";
import styled from "styled-components";
import BodyText from "../comps/text-content";
import { useRouter } from 'next/router';

const MainCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
`;

const FactBackground = styled.img`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const FactBackgroundDiv = styled.div`
    z-index: -999;
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: -999;
`;

const Warehouse = styled.img`
    margin-top: 210px;
    width: 200px;
    cursor: pointer;
`;

const Warehouse2 = styled.img`
    margin-top: 261px;
    width: 250px;
    height: 250px;
    cursor: pointer;
`;


const Warehouse3 = styled.img`
    margin-top: 261px;
    width: 250px;
    height: 250px;
`;


const NextBtn = styled.button`
  background-color: #CFEDFF;
  width: 80px;
  height: 40px;
  border-radius: 8px;
  color: #000000;
  font-size: 16px;
  border: 0;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  margin-top: 20px;
  margin-bottom: 20px;
  background-repeat: no-repeat;
  background-position: right 24px center;
`

export default function Factory() {

    const r = useRouter();
    const { page } = r.query;

    if (page === "1") {
        return <MainCont>
        <FactBackgroundDiv>
            <FactBackground src="/factory_bg.svg"></FactBackground>
        </FactBackgroundDiv>
            <BodyText txt="Oh no......."></BodyText>
            <Warehouse src="/factory2.svg" onClick={
                () => r.replace({
                    pathname: "/factory",
                    query: {
                        page: page === undefined ? 1 : Number(page) + 1,
                    }
                })
            } />
        </MainCont>
    }

    if (page === "2") {
        return <MainCont>
        <FactBackgroundDiv>
            <FactBackground src="/factory_bg.svg"></FactBackground>
        </FactBackgroundDiv>
            <BodyText txt="It’s going down!!!!!!"></BodyText>
            <Warehouse src="/factory3.svg" onClick={
                () => r.replace({
                    pathname: "/factory",
                    query: {
                        page: page === undefined ? 1 : Number(page) + 1,
                    }
                })
            } />
        </MainCont>
    }

    if (page === "3") {
        return <MainCont>
         <FactBackgroundDiv>
            <FactBackground src="/factory_bg.svg"></FactBackground>
        </FactBackgroundDiv>
            <BodyText txt="BOOM!!!"></BodyText>
            <Warehouse2 src="/factory4.svg" onClick={
                () => r.replace({
                    pathname: "/factory",
                    query: {
                        page: page === undefined ? 1 : Number(page) + 1,
                    }
                })
            } />
        </MainCont>
    }

    // last state of broken building with button to quiz page

    if (page === "4") {
        return <MainCont>
        <FactBackgroundDiv>
            <FactBackground src="/factory_bg.svg"></FactBackground>
        </FactBackgroundDiv>
            <BodyText txt={<>The <b>Rana Plaza</b> factory produced clothes for many fast fashion companies.</>}></BodyText>
            <BodyText txt={<>The building collapsed in <b>2011</b> from poor building structure and unsafe working conditions and killed <b>1,132 people.</b></>}></BodyText>
            <Warehouse3 src="/factory5.svg"/>
            <NextBtn onClick={
                () => r.push("/Quiz")
            }>Next</NextBtn>
        </MainCont>
    }

    // first state of the building before clicking

    return <MainCont>
        <FactBackgroundDiv>
            <FactBackground src="/factory_bg.svg"></FactBackground>
        </FactBackgroundDiv>
        <BodyText txt="Keep Clicking on the building to make your product."></BodyText>
        <Warehouse src="/Factory.svg" onClick={
                () => r.replace({
                    pathname: "/factory",
                    query: {
                        page: page === undefined ? 1 : Number(page) + 1,
                    }
                })
            } />
    </MainCont>
}