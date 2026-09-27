// Function Returning a Function

// Create:
// function createMultiplier(number) {
//     // return a function
// }

// Then:
// const double = createMultiplier(2);
// const triple = createMultiplier(3);
// const tenTimes = createMultiplier(10);

function createMultiplier(number) {
    return function (value){
        return value * number
    }
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const tenTimes = createMultiplier(10);

console.log(double(5));
console.log(triple(5));
console.log(tenTimes(5));

