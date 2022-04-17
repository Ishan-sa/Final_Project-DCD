import Background from "../comps/background";
import styled from "styled-components";
import Img from "../comps/image";
import { useRouter } from 'next/router';



const QuizStartBtn = styled.button`
  background-color: #19AFF0;
  width: 276px;
  height: 40px;
  margin-top: 120px;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  border: 0;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='7.41' height='12' viewBox='0 0 7.41 12'%3E%3Cpath d='M10,6,8.59,7.41,13.17,12,8.59,16.59,10,18l6-6Z' transform='translate(-8.59 -6)' fill='%23fff'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 40px center;
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

