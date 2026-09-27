// Process an Array

// Create:
// function processNumbers(numbers, callback) {
//     // your code
// }
// Given:
// const numbers = [1, 2, 3, 4, 5];
// Create callbacks:
// square()
// double()

function processNumbers(numbers, callback) {
    let result =[];

    for (let number of numbers){
        result.push(callback(number))
    }

    return result;
}

const numbers = [1, 2, 3, 4, 5];

function square(number){
     return number *number
}

function double(number){
    return number * 2;
}


console.log(processNumbers(numbers, square));
console.log(processNumbers(numbers, double));

