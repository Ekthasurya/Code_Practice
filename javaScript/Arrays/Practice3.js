// Find and Update Array Elements

// Create:
// const numbers = [10, 20, 30, 40, 50];
// Do the following:

// Change 30 to 35.
// Check whether 40 exists.
// Find the index of 50.
// Check whether 100 exists.
// Print the final array.

// Useful methods/properties:

// includes()
// indexOf()

numbers = [10, 20, 30, 40, 50];

numbers[2]=35;
console.log(numbers.includes(40));
console.log(numbers.indexOf(50));
console.log(numbers.includes(100));
console.log(numbers);
