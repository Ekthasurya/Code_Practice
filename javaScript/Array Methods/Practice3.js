// map() and filter()

// Given:
// const numbers = [1, 2, 3, 4, 5, 6];

// Part A — map()

// Create a new array containing the square of every number.

// Expected:

// [1, 4, 9, 16, 25, 36]

// Then create another array where every number is doubled.

// Part B — filter()

// Create an array containing only even numbers.

// Expected:

// [2, 4, 6]

// Then create an array containing numbers greater than 3.

// Expected:

// [4, 5, 6]
// Challenge

// Do this using arrow functions:

// numbers.map(...)
// numbers.filter(...)


const numbers = [1, 2, 3, 4, 5, 6];

const square = numbers.map(number => number * number);
console.log(square);

const double = numbers.map(number => number * 2);
console.log(double);

const findEven = numbers.filter(number => number % 2 === 0 );
console.log(findEven);

const greaterThan5 = numbers.filter(number => number >5);
console.log(greaterThan5);

