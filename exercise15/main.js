
let people = [
    {name:'alice', age:25, city:'wonderland'},
    {name:'bob', age:30, city:'builderland'},
    {name:'charlie', age:35, city:'chocolate factory'}
]
console.log("properties and values of each person")
for(let person of people){
    console.log("name:" + person.name);
    console.log("age:" + person.age);
    console.log("city:" + person.city);
    console.log("------");
}
