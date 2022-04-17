import Background from "../comps/background";
import styled from "styled-components";
import { useRouter } from "next/router";
import BodyText from "../comps/text-content";
import Head1 from "../comps/heading";
import Options from "../comps/Options";
import Img from "../comps/image";


const OpsButton = styled.button`

    background-color: #4B4B4B;
    width: 276px;
    height: 40px;
    border-radius: 20px;
    color: #fff;
    font-size: 16px;
    border: 0;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    margin-block-start: 56px;
    margin-left: 50px;

`;

const CorrectButton = styled.button`

    background-color: #90ED8E;
    width: 276px;
    height: 40px;
    border-radius: 20px;
    color: #fff;
    font-size: 16px;
    border: 0;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    margin-block-start: 56px;
    margin-left: 50px;

`;

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
  margin-block-start: 100px;
  margin-left: 50px;
`;

export default function Question1() {

    const r = useRouter();
    const { correct } = r.query;
    const { incorrect } = r.query;
    const { q2 } = r.query;




    return <div>
    <Background img="/Home_bg.svg" />
    <BodyText txt="How many litres of water would 5 jeans be equivalent to?" fontsize="20px" />
    <OpsButton onClick={
        () => r.replace({
            pathname: "/Questions",
            query: {
                correct: Number(correct) + 1
            }
        })
    }>37,500 Litres{correct}</OpsButton>

    <OpsButton onClick={
        () => r.replace({
            pathname: "/Questions",
            query: {
                incorrect: Number(incorrect) + 1
            }
        })

    }>54,500 Litres</OpsButton>

    <OpsButton onClick={
        () => r.replace({
            pathname: "/Questions",
            query: {
                incorrect: Number(incorrect) + 1
            }
        })
    }>64,000 Litres</OpsButton>

</div>

    }

    //Question 1 results
    if (correct === '') {
        return <div>

            <Background img="/Home_bg.svg" />
            <BodyText txt="How many litres of water would 5 jeans be equivalent to?" fontsize="20px" />
            <CorrectButton>37,500 Litres</CorrectButton>
            <OpsButton>54,500 Litres</OpsButton>
            <OpsButton>64,000 Litres</OpsButton>

            <QuizStartBtn Click={
                () => r.replace({
                    pathname: "/Questions",
                    query: {
                        q2: Number(q2) + 1
                    }
                })
            }>Next Question</QuizStartBtn>

            <Img img="/Person + Bubble.svg"
                w="200"
                h="200" />

        </div>

    }

    if (incorrect === '') {
        return <div>

            <Background img="/Home_bg.svg" />
            <BodyText txt="Ah! You got it wrong :(" fontsize="20px" />
            <BodyText txt="The correct answer is -" fontsize="10px" />
            <CorrectButton>37,500 Litres</CorrectButton>
            <Img img="/Caution Drowning.svg"

                w="100"
                h="100" />

            <Img img="/Drowning.svg"

                w="900"
                h="1750" />


        </div>

    }

    if (incorrect === '') {
        return <div>


            <Background img="/Home_bg.svg" />
            <BodyText txt="Ah! You got it wrong :(" fontsize="20px" />
            <BodyText txt="The correct answer is -" fontsize="10px" />
            <CorrectButton>37,500 Litres</CorrectButton>
            <Img img="/Caution Drowning.svg"

                w="100"
                h="100" />

            <Img img="/Drowning.svg"

                w="900"
                h="1750" />


        </div>

    }


    // Question 1
    return <div>
        <Background img="/Home_bg.svg" />
        <BodyText txt="How many litres of water would 5 jeans be equivalent to?" fontsize="20px" />
        <OpsButton onClick={
            () => r.replace({
                pathname: "/Questions",
                query: {
                    correct: Number(correct) + 1
                }
            })
        }>37,500 Litres{correct}</OpsButton>

        <OpsButton onClick={
            () => r.replace({
                pathname: "/Questions",
                query: {
                    incorrect: Number(incorrect) + 1
                }
            })

        }>54,500 Litres</OpsButton>

        <OpsButton onClick={
            () => r.replace({
                pathname: "/Questions",
                query: {
                    incorrect: Number(incorrect) + 1
                }
            })
        }>64,000 Litres</OpsButton>

    </div>
    
}

