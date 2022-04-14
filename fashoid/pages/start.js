import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";
import Background from "../comps/background";

export default function Start() {
    const r = useRouter();

    return <div>
        <Background img="/Start_page.svg" />
    </div>
}