import styled from "styled-components";
import { useRouter } from "next/router";


const OpsCont = styled.div``;

const QsTitle = styled.h3``;

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


export default function Options({
    q = "?",
    arr = []
}) {

    const r = useRouter();
    var { qnum } = r.query;

    if (qnum === undefined) {
        qnum = (+1);
    }

    return <OpsCont>

        <QsTitle>{q}</QsTitle>
        {/* <OpsButton onClick={
                  ()=>r.push("/results")
              }>37,500 Litres</OpsButton>
<OpsButton>54,500 Litres</OpsButton>
<OpsButton>64,000 Litres</OpsButton>  */}
        {
            arr.map((o, i) => <OpsButton onClick={
                () => r.push("/Incorrect")
            }>{o}</OpsButton>)
        }
    </OpsCont>
}

