// // Product

// https://atcoder.jp/contests/abs/tasks/abc086_a

// Problem Statement
// AtCoDeer the deer found two positive integers, 
// a and 
// b. Determine whether the product of 
// a and 
// b is even or odd.

// Constraints
// 1 
// ≤ 
// a,b 
// ≤ 
// 10000
// a and 
// b are integers.
// Input
// Input is given from Standard Input in the following format:

// a 
// b
// Output
// If the product is odd, print Odd; if it is even, print Even.

// const fk = require("fs").readFileSync("/dev/stdin", "utf8");
// const [a,b] = fk.split(" ").map(Number);
// const c = a * b;
// if (c % 2 ===0){
//   console.log("Even");
// }else{
//   console.log("Odd");
// }

// [ 'Ram Shyam Jadu Madhu', '10 20 30 60', '20 50 100 100' ]

let arr =[3,5,6,9,7];
let greater =0;
for( let i =0; i<= arr.length-1; i++){
       if(arr[i] > greater){
        greater = arr[i];
        }
}

console.log(greater);
 



