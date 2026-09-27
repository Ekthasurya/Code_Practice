// Loop Through an Array

// Create:
// const numbers = [5, 10, 15, 20, 25];
// Using a loop:

// Print every number.
// Print only even numbers.
// Print only odd numbers.
// Calculate the sum.
// Calculate the average.

const numbers = [5, 10, 15, 20, 25];
let sum =0;
for (let number of numbers){
    console.log("Numbers",number);

}


for (let number of numbers){
    if(number % 2=== 0){
        console.log("even :",number);
    }

}

for (let number of numbers){
    if(number % 2!== 0){
        console.log("odd :",number);
    }

}

for (let number of numbers){
    sum += number;

}

console.log("Total sum :", sum);
let average = sum /  numbers.length;
console.log("Average:",average);

