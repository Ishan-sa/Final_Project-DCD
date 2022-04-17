import Background from "../comps/background";
import styled from "styled-components";
import { useRouter } from "next/router";
import BodyText from "../comps/text-content";
import Head1 from "../comps/heading";
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
    const { correct2 } = r.query;
    const { incorrect2 } = r.query;
    const { q3 } = r.query;
    const { correct3 } = r.query;
    const { incorrect3 } = r.query;


//Question 3 results
if (correct3 === '') {
    return <div>

        <Background img="/Home_bg.svg" />
        <BodyText txt="How many workers died in the Rana Plaza Collapse?" fontsize="20px" />
        <OpsButton>843</OpsButton>
        <OpsButton>512</OpsButton>
        <CorrectButton>1132</CorrectButton>
        <QuizStartBtn onClick={
            () => r.replace({
                pathname: "/Questions",
                query: {
                    q3: Number(q3) + 1
                }
            })
        }>Next{q3}</QuizStartBtn>



        <Img img="/Person + Bubble.svg"
            w="200"
            h="200" />

    </div>

}

if (incorrect3 === '') {
    return <div>

        <Background img="/Home_bg.svg" />
        <BodyText txt="Ah! You got it wrong :(" fontsize="20px" />
        <BodyText txt="The correct answer is -" fontsize="10px" />
        <CorrectButton>1132</CorrectButton>

        <Img img="/Building falling.svg"

            w="900"
            h="1750" />

        <QuizStartBtn onClick={
            () => r.replace({
                pathname: "/Questions",
                query: {
                    q3: Number(q3) + 1
                }
            })
        }>Next{q3}</QuizStartBtn>


    </div>

}

if (incorrect3 === '') {
    return <div>


        <Background img="/Home_bg.svg" />
        <BodyText txt="Ah! You got it wrong :(" fontsize="20px" />
        <BodyText txt="The correct answer is -" fontsize="10px" />
        <CorrectButton>1132</CorrectButton>


        <Img img="/Building falling.svg"

            w="900"
            h="1750" />
        <QuizStartBtn onClick={
            () => r.replace({
                pathname: "/Questions",
                query: {
                    q3: Number(q3) + 1
                }
            })
        }>Next{q3}</QuizStartBtn>

    </div>

}

    //Question 3
    if (q3 === '') {
        return <div>

            <Background img="/Home_bg.svg" />
            <BodyText txt="How many workers died in the Rana Plaza Collapse? " fontsize="20px" />
            <OpsButton onClick={
                () => r.replace({
                    pathname: "/Questions",
                    query: {
                        incorrect3: Number(incorrect3) + 1
                    }
                })
            }>843</OpsButton>

            <OpsButton onClick={
                () => r.replace({
                    pathname: "/Questions",
                    query: {
                        incorrect3: Number(incorrect3) + 1
                    }
                })

            }>512{correct3}</OpsButton>

            <OpsButton onClick={
                () => r.replace({
                    pathname: "/Questions",
                    query: {
                        correct3: Number(correct3) + 1
                    }
                })
            }>1132</OpsButton>


        </div>

    }



    //Question 2 results
    if (correct2 === '') {
        return <div>

            <Background img="/Home_bg.svg" />
            <BodyText txt="How many kg of Carbon Dioxide would 6 shirts be equivalent to?" fontsize="20px" />
            <OpsButton>18.2 kg</OpsButton>
            <CorrectButton>15.6 kg</CorrectButton>
            <OpsButton>13 kg</OpsButton>
            <QuizStartBtn onClick={
                () => r.replace({
                    pathname: "/Questions",
                    query: {
                        q3: Number(q3) + 1
                    }
                })
            }>Next Question{q3}</QuizStartBtn>



            <Img img="/Person + Bubble.svg"
                w="200"
                h="200" />

        </div>

    }

    if (incorrect2 === '') {
        return <div>

            <Background img="/Home_bg.svg" />
            <BodyText txt="Ah! You got it wrong :(" fontsize="20px" />
            <BodyText txt="The correct answer is -" fontsize="10px" />
            <CorrectButton>15.6 kg</CorrectButton>

            <Img img="/Smoke.svg"

                w="900"
                h="1750" />

            <QuizStartBtn onClick={
                () => r.replace({
                    pathname: "/Questions",
                    query: {
                        q3: Number(q3) + 1
                    }
                })
            }>Next Question{q3}</QuizStartBtn>


        </div>

    }

    if (incorrect2 === '') {
        return <div>


            <Background img="/Home_bg.svg" />
            <BodyText txt="Ah! You got it wrong :(" fontsize="20px" />
            <BodyText txt="The correct answer is -" fontsize="10px" />
            <CorrectButton>15.6 kg</CorrectButton>


            <Img img="/Smoke.svg"

                w="900"
                h="1750" />
            <QuizStartBtn onClick={
                () => r.replace({
                    pathname: "/Questions",
                    query: {
                        q3: Number(q3) + 1
                    }
                })
            }>Next Question{q3}</QuizStartBtn>

        </div>

    }

    //Question 2
    if (q2 === '') {
        return <div>

            <Background img="/Home_bg.svg" />
            <BodyText txt="How many kg of Carbon Dioxide would 6 shirts be equivalent to?" fontsize="20px" />
            <OpsButton onClick={
                () => r.replace({
                    pathname: "/Questions",
                    query: {
                        incorrect2: Number(incorrect2) + 1
                    }
                })
            }>18.2 kg</OpsButton>

            <OpsButton onClick={
                () => r.replace({
                    pathname: "/Questions",
                    query: {
                        correct2: Number(correct2) + 1
                    }
                })

            }>15.6 kg{correct2}</OpsButton>

            <OpsButton onClick={
                () => r.replace({
                    pathname: "/Questions",
                    query: {
                        incorrect2: Number(incorrect2) + 1
                    }
                })
            }>13 kg</OpsButton>


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
            <QuizStartBtn onClick={
                () => r.replace({
                    pathname: "/Questions",
                    query: {
                        q2: Number(q2) + 1
                    }
                })
            }>Next Question{q2}</QuizStartBtn>



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

            <QuizStartBtn onClick={
                () => r.replace({
                    pathname: "/Questions",
                    query: {
                        q2: Number(q2) + 1
                    }
                })
            }>Next Question{q2}</QuizStartBtn>


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
            <QuizStartBtn onClick={
                () => r.replace({
                    pathname: "/Questions",
                    query: {
                        q2: Number(q2) + 1
                    }
                })
            }>Next Question{q2}</QuizStartBtn>

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

