import styled from 'styled-components';
import { useRouter } from 'next/router';
import Background from '../comps/background';
import Img from '../comps/image';
import { useState, useEffect } from 'react';
import { LogoSplash, fadeIn } from '../data/animations';

const LogoCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    animation: ${LogoSplash} 1s alternate;
`
const MainCont = styled.div`
    animation: ${fadeIn} 3s;
`

export default function Splash() {
    const [splash, setSplash] = useState(false);

    useEffect(() => {
        setSplash(true)
        setTimeout(() => {
            setSplash(false);
            r.push('/home');
        }, 3000)
    }, [])

    const r = useRouter();

    return (<MainCont>
        <Background img='/Home_bg.svg' />
        <LogoCont>
            <Img
                img='/FashoidLogo.svg'
                w="145"
                h="200"
            />
        </LogoCont>

    </MainCont>)
}