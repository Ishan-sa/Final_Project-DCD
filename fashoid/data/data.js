export const header = "Answer these questions!";

export const qs = [ 

]

var answers = [];
var quantity = '';

export function ChangeQuantity(n){
    quantity = n;
    console.log (quantity);
}

export function GetQuantity(){
    return quantity;
}