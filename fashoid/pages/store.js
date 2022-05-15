import Background from "../comps/background";
import Img from "../comps/image";
import styled from "styled-components";
import { useRouter } from 'next/router';
import { ChangeType } from "../data/data";
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import { topToBottom, ScaleIn } from "../data/animations";
import Aos from "aos";
import { useEffect } from "react"
import "aos/dist/aos.css";


const Cabinet = styled.div`
    position: relative;
    top: 20px;
`;

const Clothing = styled.div`
    position: absolute;
    top: 55px; 
    left: 35px;
    cursor: pointer;
`;

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  animation: ${topToBottom} 1s;
`

const Shirts = styled.div`
    cursor: pointer;
`;

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
const StoreLady = styled.div`
    animation: ${ScaleIn} 0.5s linear;
`
const ShirtsCont = styled.div`
    overflow: hidden;
`
const NavBtns = styled.div`
    width: 74vw;
    display: flex;
    padding: 20px 0px 0px 0px;
    justify-content: space-between;
    align-items: center;
`

export default function Store() {
    const r = useRouter();
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

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
        <StoreLady
            data-aos="fade-down">
            <Img img="/storelady.svg" w="300" h="300" />
        </StoreLady>
        <div data-aos="fade-down">
            <Img img="/lightlines.svg" w="390" h="9" padding="0px 0px 0px 0px" />
            <Img img="/lightbar.svg" w="390" h="100" padding="0px 7px 0px 7px" />
        </div>

        <Cabinet w="296" h="464" onClick={
            () => ChangeType("jeans")
        }>
            <Img img="/cabinet.svg" w="296" h="464" />
            <Clothing
                data-aos="fade-down"
                onClick={
                    () => r.push("/QtySelect")
                }>
                <Img img="/topJeans.svg" w="221" h="37" po="absolute" />
                <Img img="/foldedjeans.svg" w="221" h="37" po="absolute" />
                <Img img="/jeans3.svg" w="213.67" h="179.41" po="absolute" />
            </Clothing>
        </Cabinet>

        <ShirtsCont
            data-aos="flip-up"
            onClick={
                () => ChangeType("shirts")
            }>
            <Shirts onClick={
                () => r.push("/QtySelect")
            }>
                <Img img="/topsrack.svg" w="342" h="189" />
            </Shirts>
        </ShirtsCont>

    </MainCont>
}