export const header = "Answer these questions!";

export const qs = [ 

]

var answers = [];
var quantity = '';
var type = '';

export function ChangeQuantity(n){
    quantity = n;
}

export function GetQuantity(){
    return quantity;
}

export function ChangeType(t){
    type = t;
}

export function GetType(){
    return type;
}