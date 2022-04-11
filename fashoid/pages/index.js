import Head from "next/head";
import Image from "next/image";
import Head1 from "../comps/heading";
import Heading from "../comps/heading";
import styles from "../styles/Home.module.css";
import Img from "../comps/image";
import { useRouter } from 'next/router';

// const r = useRouter();

export default function Main() {
  return <div>

    <Head1 txt="What is fashoid?"></Head1>
    <Img></Img>
  </div>


}