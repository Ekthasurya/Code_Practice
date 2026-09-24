// Return Multiple Values
// Create a function:
// function calculate(a, b) {
//     // calculate sum
//     // calculate difference
//     // calculate multiplication
// }
// The function should return an object containing:

// sum
// difference
// multiplication

// For:

// calculate(20, 5);

function calculate(a, b) {
    let sum = a+ b;
    let difference = a -b;
    let multiplication = a * b;

    return {
        sum,difference,multiplication
    }
}

let result = calculate(20,5);
console.log(result);
console.log(result.sum);
console.log(result.difference);
console.log(result.multiplication);
