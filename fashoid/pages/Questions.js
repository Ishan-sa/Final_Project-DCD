import Background from "../comps/background";
import styled from "styled-components";
import { useRouter } from "next/router";
import BodyText from "../comps/text-content";
import Head1 from "../comps/heading";
import Options from "../comps/Options";
import { qs } from "../data/que_content";




export default function Questions() {

     const r = useRouter();
     var {qnum} = r.query;

     if(qnum === undefined){
        qnum = 0;
     }

    return <div>
        <Background img="/Home_bg.svg" />

        <Options 

        q={qs[qnum].title}
        arr={qs[qnum].ops}

        />
    
    </div>

}

