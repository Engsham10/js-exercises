// call back function

function operate(number1,number2,callback){
    return callback(number1,number2);
}

function multiply(number1,number2){
    return number1*number2;
}
function divide(number1,number2){
    return number1/number2;
}

console.log(`operate is ${multiply(10,2,operate)}`);
console.log(`operate is ${divide(100,4,operate)}`);