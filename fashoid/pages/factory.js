import Background from "../comps/background";
import Img from "../comps/image";
import styled from "styled-components";
import Button from "../comps/button";
import BodyText from "../comps/text-content";
import { useRouter } from 'next/router';

const MainCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
`;

const Warehouse = styled.img`
    padding: 100px 0px 0px 0px;
    width: 50%;
`;

export default function Factory(){

    return <MainCont>
    <Background img="/factory_bg.svg"></Background>

    <BodyText 
    txt="Keep Clicking on the building to make your product.">
    </BodyText>

    <Warehouse src="/Factory.svg" />

    </MainCont>
}