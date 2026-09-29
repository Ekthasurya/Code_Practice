// Placing Marbles

// Problem Statement
// Snuke has a grid consisting of three squares numbered 
// 1, 
// 2 and 
// 3. In each square, either 0 or 1 is written. The number written in Square 
// i is 
// s 
// i
// ​
//  .

// Snuke will place a marble on each square that says 1. Find the number of squares on which Snuke will place a marble.

// Constraints
// Each of 
// s 
// 1
// ​
//  , 
// s 
// 2
// ​
//   and 
// s 
// 3
// ​
//   is either 1 or 0.
// Input
// Input is given from Standard Input in the following format:

// s 
// 1
// ​
//  s 
// 2
// ​
//  s 
// 3
// ​
 
// Output
// Print the answer.

// Sample Input 1
// Copy
// 101
// Sample Output 1
// Copy
// 2
// A marble will be placed on Square 
// 1 and 
// 3.
// Sample Input 2
// Copy
// 000
// Sample Output 2
// Copy
// 0




const fk = require("fs").readFileSync("/dev/stdin", "utf8");
const input = fk.split("\n");
const a = input[0].split("").map(Number);
count=0;
for (i =0; i<=a.length; i++){
    if (a[i]===1){
     count += a[i];
        }
  
}
console.log(count);










