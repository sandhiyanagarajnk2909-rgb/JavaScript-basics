//SWAP THE VALUES OF TWO VARIABLES

let a = 1;
let b = 2;

[a,b] = [b,a]

console.log(a);
console.log(b);

//swap 2 elements in an array

const colors = ["red", "green", "Yellow", "blue", "black" ]; 

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

//Assign array element to variable

const fruit = ["apple", "banana", "mango", "berry", "cherry" ]; 
const [firstFruit, secondFruit, thirdFruit, ...extraFruit] = fruit;

console.log(firstFruit);
console.log(secondFruit);
console.log(thirdFruit);
console.log(extraFruit);

//extract value from object

const person1 = {
    firstName : "Sandhiya",
    lastName : "Nagaraj",
    age : "23",
    job: "SPE",

}

const person2 = {
    firstName: "Sandy",
    lastName : "N",
    age:"24",
}

const{firstName, lastName,age, job}  = person2
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

//Destructure in function paramaters

//function displayPerson ({firstName, lastName, age, job=unemployed}){
 //   console.log(`name: ${firstName} ${lastName}`);
//    console.log(`name: ${age}`);
//    console.log(`job: ${job}`);
    
//}
    


