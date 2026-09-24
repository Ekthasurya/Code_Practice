// Return the Largest Number
// Create:
// function findLargest(a, b, c) {
//     // return the largest number
// }


function findLargest(a, b, c) {
    if(a>b && a>c){
        return a;
    }
    else if (b>a && b>c){
        return b;
    }
    else {
        return c;
    }
}

console.log(findLargest(44,67,89));