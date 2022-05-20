import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import styled from 'styled-components';
import { topToBottom } from "../data/animations";
import { useRouter } from 'next/router';

const Home = styled(HomeIcon)`
    color: #333;
    height: 40px !important;
    width: auto !important;
    position: relative;
    cursor: pointer;
    animation: ${topToBottom} 1s;
    transition: 0.3s linear;
    &:hover{
        scale: 0.7;
        color: #636363;
    }
`
const Back = styled(ArrowBackIosSharpIcon)`
    position: relative;
    height: 30px !important;
    width: auto !important;
    color: #333;
    cursor: pointer;
    animation: ${topToBottom} 1s;
    transition: 0.3s linear;
    &:hover{
        scale: 0.7;
        color: #636363;
    }
`
const NavBtns = styled.div`
    width: 74vw;
    display: flex;
    padding: 20px 0px 80px 0px;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
`

export default function NavButtons() {
    const r = useRouter();
    return (
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
    )
}