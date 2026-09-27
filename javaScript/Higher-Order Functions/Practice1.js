// Function as an Argument

// Create:
// function calculate(a, b, operation) {
//     // your code
// }

// Create three functions:
// add()
// subtract()
// multiply()

function calculate(a, b, operation) {
    console.log(operation(a,b));
}

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

calculate(20, 10, add);
calculate(20, 10, subtract);
calculate(20, 10, multiply);




