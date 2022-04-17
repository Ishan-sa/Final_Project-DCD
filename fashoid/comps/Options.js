import styled from "styled-components";
import { useRouter } from "next/router";
import Background from "./background";


const OpsButton = styled.button`
    background-color: #4B4B4B;
    width: 276px;
    height: 40px;
    border-radius: 20px;
    color: #fff;
    margin: 25px 25px;
    font-size: 16px;
    border: 0;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
`;

const AllCont = styled.div`
    display: flex;
    justifu-content: center;
    flex-direction: column;
    align-items: center;
`

export default function Options({
    arr = []
}) {

    const r = useRouter();
    var { qnum } = r.query;

    if (qnum === undefined) {
        qnum = (+1);
    }

    return <AllCont>
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
    </AllCont>
}

