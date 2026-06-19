//sort

const number1=[20,15,10,35,30]

let result1 = number1.sort();

console.log(result1);

//find

const number2=[20,15,10,35,45,30]

let result2 = number2.find((value) => {
    return value > 30;

});

console.log(result2);

//filter

const number3=[20,15,10,45,35,30]

let result3 = number3.filter((value) => {
    return value > 30;

});

console.log(result3);

//map
const number4=[20,15,10,45,35,30]

let result4 = number4.map((value) => {
    return "#" + value;


});

console.log(result4);

//reduce

//map
const number5=[20,15,10,45,35,30]

let result5 = number5.reduce((acc, value) => {
    return acc * value;
    

});

console.log(result5);