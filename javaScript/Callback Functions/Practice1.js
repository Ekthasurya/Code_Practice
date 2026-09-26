// Basic Callback

// Create a function:
// function calculate(a, b, callback) {
//     // your code
// }
// It should:

// Perform an operation using a and b.
// Send the result to the callback.

// Create these callback functions:

// add
// subtract
// multiply


function calculate(a, b, callback) {
    let result = callback(a,b);
    return result;
}

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a -b;
}

function multiply(a,b){
    return a * b;
}

console.log(calculate(4,2,add));
console.log(calculate(4,2,subtract));
console.log(calculate(4,2,multiply));
