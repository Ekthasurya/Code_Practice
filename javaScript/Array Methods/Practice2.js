// Search and Find Elements
// Given:

// const numbers = [10, 20, 30, 40, 50];

// Use:

// includes()
// indexOf()
// find()
// findIndex()

// Do the following:

// Check whether 30 exists.
// Find the index of 40.
// Find the first number greater than 25.
// Find the index of the first number greater than 25.
// Check whether 100 exists.

const numbers = [10, 20, 30, 40, 50];

console.log(numbers.includes(30));
console.log(numbers.indexOf(40));

console.log(numbers.find(function(number){
    return number >25
}))

console.log(numbers.findIndex(function(number){
    return number >25
}))

console.log(numbers.includes(100));
