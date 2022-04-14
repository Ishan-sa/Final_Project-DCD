import Background from "../comps/background";
import styled from "styled-components";
import { useRouter } from "next/router";



export default function Questions() {

    const r = useRouter();

    return <div>
          <Background img="/Home_bg.svg" />
        
    </div>


}
