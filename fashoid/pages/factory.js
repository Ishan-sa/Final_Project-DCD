import styled from "styled-components";
import BodyText from "../comps/text-content";
import { useRouter } from 'next/router';
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
    margin-top: 220px;
    width: 200px;
    cursor: pointer;
`;

const Warehouse2 = styled.img`
    margin-top: 241px;
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
  width: 100px;
  height: 40px;
  border-radius: 8px;
  color: #333333;
  font-size: 16px;
  border: 0;
  padding-right: 20px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  margin-top: 20px;
  margin-bottom: 20px;
  background-repeat: no-repeat;
  background-position: right 20px center;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='7.41' height='12' viewBox='0 0 7.41 12'%3E%3Cpath d='M10,6,8.59,7.41,13.17,12,8.59,16.59,10,18l6-6Z' transform='translate(-8.59 -6)' fill='%23333'/%3E%3C/svg%3E");
`

const SubCont = styled.div`
    padding-top: 40px;
`

export default function Factory() {

    useEffect(() => {
        Aos.init({});
    }, []);

    const r = useRouter();
    const { page } = r.query;

    if (page === "1") {
        return <MainCont>
            <FactBackgroundDiv>
                <FactBackground src="/factory_bg.svg"></FactBackground>
            </FactBackgroundDiv>
            <SubCont>
                <div data-aos="flip-down" data-aos-duration="500">
                    <BodyText txt="Oh no......." />
                </div>
                <Warehouse
                    data-aos="flip-down" data-aos-duration="1000"
                    src="/factory2.svg" onClick={
                        () => r.replace({
                            pathname: "/factory",
                            query: {
                                page: page === undefined ? 1 : Number(page) + 1,
                            }
                        })
                    } />
            </SubCont>

        </MainCont>
    }

    if (page === "2") {
        return <MainCont>
            <FactBackgroundDiv>
                <FactBackground src="/factory_bg.svg"></FactBackground>
            </FactBackgroundDiv>
            <SubCont>
                <div data-aos="flip-down" data-aos-duration="500">
                    <BodyText txt="It's going down!!!!!!"></BodyText>
                </div>
            </SubCont>
            <Warehouse
                data-aos="flip-down" data-aos-duration="1000"
                src="/factory3.svg" onClick={
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
            <SubCont>
                <div data-aos="flip-down" data-aos-duration="500">
                    <BodyText txt="BOOM!!!"></BodyText>
                </div>
            </SubCont>
            <Warehouse2
                data-aos="flip-down" data-aos-duration="1000"
                src="/factory4.svg" onClick={
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
            <SubCont data-aos="flip-down" data-aos-duration="500">
                <BodyText txt={<>The <b>Rana Plaza</b> factory produced clothes for many fast fashion companies.</>}></BodyText>
                <BodyText txt={<>The building collapsed in <b>2011</b> from poor building structure and unsafe working conditions and killed <b>1,132 people.</b></>}></BodyText>
            </SubCont>
            <Warehouse2
                data-aos="flip-down" data-aos-duration="1000"
                src="/factory5.svg" />
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
        <SubCont data-aos="flip-down" data-aos-duration="1000">
            <BodyText txt="Keep Clicking on the building to make your product."></BodyText>
        </SubCont>
        <Warehouse
            data-aos="fade-down"
            data-aos-duration="1000"
            src="/Factory.svg" onClick={
                () => r.replace({
                    pathname: "/factory",
                    query: {
                        page: page === undefined ? 1 : Number(page) + 1,
                    }
                })
            } />
    </MainCont>
}