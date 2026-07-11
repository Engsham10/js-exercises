// spread operator
const array1 = [1,2,3];
const array2 = [...array1,4,5,6];
console.log(array2);

// rest parameter
function multiply(...numbers){
    return numbers.reduce((total,num)=>total*num,1);
}

console.log(multiply(10,20));
