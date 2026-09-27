 // Filter Using a Higher-Order Function

// Create:
// function filterNumbers(numbers, condition) {
//     // your code
// }

// Given:
// const numbers = [10, 15, 20, 25, 30, 35, 40];
// Create:
// isEven()
// isGreaterThan20()

function filterNumbers(numbers, condition) {
     let result = [];
     for (let number of numbers){
        if(condition(number)){
            result.push(number);
        }
     }

     return result;
}

const numbers = [10, 15, 20, 25, 30, 35, 40];

function isEven(number){
    return number % 2 ===0;
}

function isGreaterThan20(number){
    return number >=20;
}

console.log(filterNumbers(numbers, isEven));

console.log(filterNumbers(numbers, isGreaterThan20));


