// Array + Callback

// Create your own function:
// function processArray(numbers, callback) {
//     // your code
// }
// Given:const numbers = [1, 2, 3, 4, 5];
// Use a callback to process every number.
// Create callbacks:
// square
// cube


function processArray(numbers, callback) {
    const result = [];

    for (let number of numbers) {
        result.push(callback(number));
    }

    return result;
}

const numbers = [1, 2, 3, 4, 5];

// Square callback
function square(number) {
    return number * number;
}

// Cube callback
function cube(number) {
    return number * number * number;
}

console.log(processArray(numbers, square));
console.log(processArray(numbers, cube));