// Closure Factory

// Create a function:
// function createMultiplier(number) {
//     // return a function
// }

// It should create a function that multiplies another number by the original number.

function createMultiplier(number) {
    function inner(value){
        return number * value;
    }

    return inner;
}

let double = createMultiplier(2);
let triple = createMultiplier(3);

console.log(double(5));
console.log(triple(5));

