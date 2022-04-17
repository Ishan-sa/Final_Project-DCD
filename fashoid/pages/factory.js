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

const Warehouse = styled.img`
    margin-top: 100px;
    width: 200px;
`;

const Warehouse2 = styled.img`
    margin-top: 100px;
    width: 250px;
    height: 250px;
`;

export default function Factory() {

    const r = useRouter();
    const { page } = r.query;

    if (page === "1") {
        return <MainCont>
            <Background img="/factory_bg.svg"></Background>
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
            <Background img="/factory_bg.svg"></Background>
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
            <Background img="/factory_bg.svg"></Background>
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
            <Background img="/factory_bg.svg"></Background>
            <BodyText txt="The Rana Plaza factory produced clothes for many fast fashion companies."></BodyText>
            <BodyText txt="The building collapsed in 2011 from poor building structure and unsafe working conditions and killed 1,132 people."></BodyText>
            <Warehouse2 src="/factory5.svg"/>
                 <button onClick={
                     () => r.push("/Quiz")
                 }>Next</button>
        </MainCont>
    }

    // first state of the building before clicking

    return <MainCont>
        <Background img="/factory_bg.svg"></Background>
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