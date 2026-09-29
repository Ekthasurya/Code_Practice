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




// const fk = require("fs").readFileSync("/dev/stdin", "utf8");
// const input = fk.split("\n");
// const a = input[0].split("").map(Number);
// count=0;
// for (i =0; i<=a.length; i++){
//     if (a[i]===1){
//      count += a[i];
//         }
  
// }
// console.log(count);

const n = 3;
const arr =[4,12,40];
let count =0;
let b =true;

if (n === arr.length){
   while(b){
        b=true;
        let i =0;
        for(i =0; i<=arr.length -1; i++){
            if (arr[i] % 2 !== 0 || arr[i] < 0 ){
                b = false;
                break;
            }
 }

  if (b === false){
            break;
        }

        
      for(i =0; i<=arr.length -1; i++){
        arr[i]=arr[i]/2
       }
       count++;
  }
}
console.log(count);   













