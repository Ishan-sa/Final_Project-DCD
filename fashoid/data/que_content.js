
export const qs = [
    {
        title:"How many litres of water would 5 jeans be equivalent to?",
        ops:["37,500 Litres","54,500 Litres","64,000 Litres"]
        //answers:["37,000 Litres"]
    },
    {
        title:"How many kg of Carbon Dioxide would 6 shirts be equivalent to?",
        ops:["18.2 kg","15.6 kg","13 kg"]
        //answers:["15.6 kg"]
    },
    {
        title:"How many workers died in the Rana Plaza Collapse?",
        ops:["843","512","1132"]
        //answers:["1132"]
    }
   
]

// export const ops = [
//     ["Nice", "Bad"],
//     ["hap", "NO", "Box"],
//     ["Noting", "get lost"]
// ]

var answers = [];
export function ChangeAnswers(n, qnum){
    answers[qnum] = n;
    console.log(answers);
}

export function GetAnswers(){
    return answers; 
}

var name = '';

