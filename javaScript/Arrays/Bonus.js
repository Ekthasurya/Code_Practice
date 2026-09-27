// slice()

const numbers = [10, 20, 30, 40, 50];

const result = numbers.slice(1, 4);

console.log(result);


// splice()

const fruits = ["Apple", "Banana", "Mango", "Orange"];

fruits.splice(1, 2);

console.log(fruits);



const number = [1, 2, 3, 4, 5];

numbers.reverse();

console.log(number);


const number1 = [40, 10, 5, 100, 25];

number1.sort(function(a, b) {
    return a - b;
});

console.log(number1);


// Combine Arrays

const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express.js", "MongoDB"];

const skills = [...frontend, ...backend];

console.log(skills);