import styled from "styled-components";
import Head1 from "../comps/heading";
import styles from "../styles/Home.module.css";
import Img from "../comps/image";
import BodyText from "../comps/text-content";
import Background from "../comps/background";
import ButtonExampleButton from "../comps/button";
// import 'semantic-ui-css/semantic.min.css'
// import { useRouter } from 'next/router';

// const r = useRouter();

export default function Main() {
  return <div>
    <Background img="/Home_bg.svg" />
    <Head1 txt="What is Fashoid?" />
    <Img img="/GirlThinking.svg" />
    <BodyText txt="Fashoid is a web app that has the goal of letting its users know how much resources it takes to make a set of clothing such as Jeans and a T-shirt. It also teaches its users the downsides of fast fashion and over-consumption." />
    <BodyText txt="The app will take you through the production process that is common for most fast fashion brands." />
    <Img img="/Jean.svg" />
    <Img img="/Down_arrow.svg" />
    <Img img="/Drop.svg" />
    <Img img="/Down_arrow.svg" />
    <Img img="/Factory.svg" />
    {/* <ButtonExampleButton /> */}
    <button>Click to enter simulation</button>
  </div>
}