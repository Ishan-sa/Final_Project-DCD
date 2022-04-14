import Background from "../comps/background";
import styled from "styled-components";
import Img from "../comps/image";
import { useRouter } from 'next/router';



const QuizStartBtn = styled.button`
  background-color: #19AFF0;
  width: 276px;
  height: 40px;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  border: 0;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
`

export default function Quiz() {

    const r = useRouter();

    return <div>
        <Background img="/Home_bg.svg" />
        <Img img="/Quiz.svg"
            w="380"
            h="420"
        />


        <div className="QuizStartBtn">
            <QuizStartBtn onClick={
                () => r.push("/Questions")
            }>Lets do the quiz</QuizStartBtn>
        </div>
    </div>


}

