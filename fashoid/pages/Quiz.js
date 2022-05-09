
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
    background-image: url("/OuterRing.svg");
    background-repeat: no-repeat;
    background-position: left 24px center;

`;

const CorrectButton = styled.button`

    background-color: #90ED8E;
    width: 276px;
    height: 40px;
    border-radius: 20px;
    color: #333333;
    font-size: 16px;
    border: 0;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    margin-block-start: 56px;
    margin-left: 50px;
    background-image: url("/selectedOption.svg");
    background-repeat: no-repeat;
    background-position: left 24px center;

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
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='7.41' height='12' viewBox='0 0 7.41 12'%3E%3Cpath d='M10,6,8.59,7.41,13.17,12,8.59,16.59,10,18l6-6Z' transform='translate(-8.59 -6)' fill='%23fff'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 40px center;
`;

const TextCont = styled.div`
    padding-top: 40px;
`
const LastNext = styled.button`
    border-radius: 8px;
    padding: 10px 40px 10px 40px;
    background-color: #333333;
    border: 0;
    color: white;
    font-family: 'Montserrat', sans-serif;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='7.41' height='12' viewBox='0 0 7.41 12'%3E%3Cpath d='M10,6,8.59,7.41,13.17,12,8.59,16.59,10,18l6-6Z' transform='translate(-8.59 -6)' fill='%23fff'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 20px center;
    cursor: pointer;
`
const LastNextCont = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 40px;
`

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
    const {q1} = r.query;



    ///////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////Q3
    //////////////////////////////////////////////////////////////////////////////////////////////////


    //Question 3 results
    if (correct3 === '') {
        return <div>
            <Background img="/Home_bg.svg" />
            <TextCont>
                <BodyText txt="Q3- How many workers died in the Rana Plaza Collapse?" fontsize="20px" />
            </TextCont>
            <OpsButton>843</OpsButton>
            <OpsButton>512</OpsButton>
            <CorrectButton>1132</CorrectButton>
            <LastNextCont>
                <LastNext onClick={
                    () => r.replace({
                        pathname: "/learnmore",
                        query: {
                            q3: Number(q3) + 1
                        }
                    })
                }>Next{q3}</LastNext>
            </LastNextCont>



            <Img img="/Person + Bubble.svg"
                w="250"
                h="250" />

        </div>

    }

    if (incorrect3 === '') {
        return <div>

            <Background img="/Home_bg.svg" />
            <TextCont>
                <BodyText txt="Ah! You got it wrong :(" fontsize="20px" />
            </TextCont>
            <BodyText txt="The correct answer is -" fontsize="16px" />
            <CorrectButton>1132</CorrectButton>
            <LastNextCont>
                <LastNext onClick={
                    () => r.replace({
                        pathname: "/learnmore",
                        query: {
                            q3: Number(q3) + 1
                        }
                    })
                }>Next{q3}</LastNext>
            </LastNextCont>
            <Img img="/Building falling.svg"

                w="600"
                h="650" />
        </div>

    }

    if (incorrect3 === '') {
        return <div>


            <Background img="/Home_bg.svg" />
            <TextCont>
                <BodyText txt="Ah! You got it wrong :(" fontsize="20px" />
            </TextCont>
            <BodyText txt="The correct answer is -" fontsize="16px" />
            <CorrectButton>1132</CorrectButton>

            <LastNextCont>
                <LastNext onClick={
                    () => r.replace({
                        pathname: "/learnmore",
                        query: {
                            q3: Number(q3) + 1
                        }
                    })
                }>Next{q3}</LastNext>
            </LastNextCont>

            <Img img="/Building falling.svg"

                w="600"
                h="650" />

        </div>

    }

    //Question 3
    if (q3 === '') {
        return <div>

            <Background img="/Home_bg.svg" />
            <TextCont>
                <BodyText txt="Q3- How many workers died in the Rana Plaza Collapse? " fontsize="20px" />
            </TextCont>
            <OpsButton onClick={
                () => r.replace({
                    pathname: "/Quiz",
                    query: {
                        incorrect3: Number(incorrect3) + 1
                    }
                })
            }>843</OpsButton>

            <OpsButton onClick={
                () => r.replace({
                    pathname: "/Quiz",
                    query: {
                        incorrect3: Number(incorrect3) + 1
                    }
                })

            }>512{correct3}</OpsButton>

            <OpsButton onClick={
                () => r.replace({
                    pathname: "/Quiz",
                    query: {
                        correct3: Number(correct3) + 1
                    }
                })
            }>1132</OpsButton>


        </div>

    }






    ///////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////Q2
    //////////////////////////////////////////////////////////////////////////////////////////////////


    //Question 2 results
    if (correct2 === '') {
        return <div>

            <Background img="/Home_bg.svg" />
            <TextCont>
                <BodyText txt="Q2- How many kg of Carbon Dioxide would 6 shirts be equivalent to?" fontsize="20px" />
            </TextCont>
            <OpsButton>18.2 kg</OpsButton>
            <CorrectButton>15.6 kg</CorrectButton>
            <OpsButton>13 kg</OpsButton>
            <QuizStartBtn onClick={
                () => r.replace({
                    pathname: "/Quiz",
                    query: {
                        q3: Number(q3) + 1
                    }
                })
            }>Next Question{q3}</QuizStartBtn>



            <Img img="/Person + Bubble.svg"
                w="250"
                h="250" />

        </div>

    }

    if (incorrect2 === '') {
        return <div>

            <Background img="/Home_bg.svg" />
            <TextCont>
                <BodyText txt="Ah! You got it wrong :(" fontsize="20px" />
            </TextCont>
            <BodyText txt="The correct answer is -" fontsize="16px" />
            <CorrectButton>15.6 kg</CorrectButton>
            <QuizStartBtn onClick={
                () => r.replace({
                    pathname: "/Quiz",
                    query: {
                        q3: Number(q3) + 1
                    }
                })
            }>Next Question{q3}</QuizStartBtn>

            <Img img="/Smoke.svg"

                w="600"
                h="650" />



        </div>

    }

    if (incorrect2 === '') {
        return <div>
            <Background img="/Home_bg.svg" />
            <TextCont>
                <BodyText txt="Ah! You got it wrong :(" fontsize="20px" />
            </TextCont>
            <BodyText txt="The correct answer is -" fontsize="16px" />
            <CorrectButton>15.6 kg</CorrectButton>

            <QuizStartBtn onClick={
                () => r.replace({
                    pathname: "/Quiz",
                    query: {
                        q3: Number(q3) + 1
                    }
                })
            }>Next Question{q3}</QuizStartBtn>

            <Img img="/Smoke.svg"

                w="600"
                h="650" />

        </div>

    }

    //Question 2
    if (q2 === '') {
        return <div>

            <Background img="/Home_bg.svg" />
            <TextCont>
                <BodyText txt="Q2- How many kg of Carbon Dioxide would 6 shirts be equivalent to?" fontsize="20px" />
            </TextCont>
            <OpsButton onClick={
                () => r.replace({
                    pathname: "/Quiz",
                    query: {
                        incorrect2: Number(incorrect2) + 1
                    }
                })
            }>18.2 kg</OpsButton>

            <OpsButton onClick={
                () => r.replace({
                    pathname: "/Quiz",
                    query: {
                        correct2: Number(correct2) + 1
                    }
                })

            }>15.6 kg{correct2}</OpsButton>

            <OpsButton onClick={
                () => r.replace({
                    pathname: "/Quiz",
                    query: {
                        incorrect2: Number(incorrect2) + 1
                    }
                })
            }>13 kg</OpsButton>


        </div>

    }





    ///////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////Q1
    //////////////////////////////////////////////////////////////////////////////////////////////////


    //Question 1 results
    if (correct === '') {
        return <div>
            <Background img="/Home_bg.svg" />
            <TextCont>
                <BodyText txt="Q1- How many litres of water would 5 jeans be equivalent to?" fontsize="20px" />
            </TextCont>
            <CorrectButton>37,500 Litres</CorrectButton>
            <OpsButton>54,500 Litres</OpsButton>
            <OpsButton>64,000 Litres</OpsButton>
            <QuizStartBtn onClick={
                () => r.replace({
                    pathname: "/Quiz",
                    query: {
                        q2: Number(q2) + 1
                    }
                })
            }>Next Question{q2}</QuizStartBtn>

            <Img img="/Person + Bubble.svg"
                w="250"
                h="250" />
        </div>

    }

    if (incorrect === '') {
        return <div>
            <Background img="/Home_bg.svg" />
            <TextCont>
                <BodyText txt="Ah! You got it wrong :(" fontsize="20px" />
            </TextCont>
            <BodyText txt="The correct answer is -" fontsize="16px" />
            <CorrectButton>37,500 Litres</CorrectButton>

            <QuizStartBtn onClick={
                () => r.replace({
                    pathname: "/Quiz",
                    query: {
                        q2: Number(q2) + 1
                    }
                })
            }>Next Question{q2}</QuizStartBtn>
            <Img img="/Caution Drowning.svg"
                w="100"
                h="100"
                padding="20px 0px 0px 0px" />

            <Img img="/ManDrowning.svg"
                w="500"
                h="400"
                position="absolute"
                t="20px"
                padding="0px 0px 0px 0px"
            />

            <Img img="/water.svg"
                w="400"
                h="413"
                objectfit="cover"
                position="absolute"
                padding="0px 0px 0px 0px" />

        </div>

    }

    if (incorrect === '') {
        return <div>
            <Background img="/Home_bg.svg" />
            <TextCont>
                <BodyText txt="Ah! You got it wrong :(" fontsize="20px" />
            </TextCont>
            <BodyText txt="The correct answer is -" fontsize="16px" />
            <CorrectButton>37,500 Litres</CorrectButton>
            <QuizStartBtn onClick={
                () => r.replace({
                    pathname: "/Quiz",
                    query: {
                        q2: Number(q2) + 1
                    }
                })
            }>Next Question{q2}</QuizStartBtn>
            <Img img="/Caution Drowning.svg"
                w="100"
                h="100"
                padding="20px 0px 0px 0px" />

            <Img img="/ManDrowning.svg"
                w="500"
                h="400"
                padding="0px 0px 0px 0px"
            />

            <Img img="/water.svg"
                w="400"
                h="413"
                objectfit="cover"
                position="absolute"
                padding="0px 0px 0px 0px"
            />
        </div>

    }


    // Question 1

    if (q1 === '') {
        return <div>
            <Background img="/Home_bg.svg" />
            <TextCont>
                <BodyText fontsize="20px" txt="Q1- How many litres of water would 5 jeans be equivalent to?" />
            </TextCont>
            <OpsButton onClick={
                () => r.replace({
                    pathname: "/Quiz",
                    query: {
                        correct: Number(correct) + 1
                    }
                })
            }>37,500 Litres{correct}</OpsButton>

            <OpsButton onClick={
                () => r.replace({
                    pathname: "/Quiz",
                    query: {
                        incorrect: Number(incorrect) + 1
                    }
                })

            }>54,500 Litres</OpsButton>

            <OpsButton onClick={
                () => r.replace({
                    pathname: "/Quiz",
                    query: {
                        incorrect: Number(incorrect) + 1
                    }
                })
            }>64,000 Litres</OpsButton>

        </div>

    }

////Start page//////

    return <div>
        <Background img="/Home_bg.svg" />
        <Img img="/Quiz.svg"
            w="380"
            h="420"
        />

        <QuizStartBtn onClick={
            () => r.replace({
                pathname: "/Quiz",
                query: {
                    q1: Number(q1) + 1
                }
            })
        }>Lets do the quiz{q1}</QuizStartBtn>

    </div>


}
