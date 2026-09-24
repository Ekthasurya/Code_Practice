// Now create:

// function sum(...numbers) {
//     // calculate sum
// }



function sum(...numbers) {
    let total = 0;

    for (let number of numbers) {
        total = total + number;
    }

    return total;
}

console.log(sum(10, 20));
console.log(sum(10, 20, 30));
console.log(sum(1, 2, 3, 4, 5));