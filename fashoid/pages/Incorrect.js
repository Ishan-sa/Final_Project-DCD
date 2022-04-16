import Background from "../comps/background";
import styled from "styled-components";
import { useRouter } from "next/router";
import BodyText from "../comps/text-content";
import Head1 from "../comps/heading";
import Options from "../comps/Options";
import { qs } from "../data/que_content";


const CorrectBtn = styled.button`
  background-color: #4B4B4B;
  width: 276px;
  height: 40px;
  border-radius: 20px;
  color: #fff;
  font-size: 16px;
  border: 0;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  margin-block-start: 246px;
  margin-left: 50px;
`


export default function Questions() {

    const r = useRouter();
    var {qnum} = r.query;
  

    if(qnum === undefined){
       qnum = +1;
    }

   



   return <div>
       <Background img="/Home_bg.svg" />

       {/* <Options 

    //    q={qs[qnum].title}
    //    arr={qs[qnum].ops}

       /> */}

       
       {
        <CorrectBtn onClick={
           ()=>r.push({
           pathname:"/Questions",
           query:{
               qnum:Number(qnum)+1,
               
           }
        })
         }>  Next Question </CorrectBtn> 
        }
    
        </div>

        

    }
