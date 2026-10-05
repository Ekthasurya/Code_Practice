// Kagami Mochi  / 
// Time Limit: 2 sec / Memory Limit: 256 MiB

// Score : 
// 200 points

// Problem Statement
// An 
// X-layered kagami mochi 
// (X≥1) is a pile of 
// X round mochi (rice cake) stacked vertically where each mochi (except the bottom one) has a smaller diameter than that of the mochi directly below it. For example, if you stack three mochi with diameters of 
// 10, 
// 8 and 
// 6 centimeters from bottom to top in this order, you have a 
// 3-layered kagami mochi; if you put just one mochi, you have a 
// 1-layered kagami mochi.

// Lunlun the dachshund has 
// N round mochi, and the diameter of the 
// i-th mochi is 
// d 
// i
// ​
//   centimeters. When we make a kagami mochi using some or all of them, at most how many layers can our kagami mochi have?

// Constraints
// 1≤N≤100
// 1≤d 
// i
// ​
//  ≤100
// All input values are integers.
// Input
// Input is given from Standard Input in the following format:

// N
// d 
// 1
// ​
 
// :
// d 
// N
// ​
 
// Output
// Print the maximum number of layers in a kagami mochi that can be made.

// Sample Input 1
// Copy
// 4
// 10
// 8
// 8
// 6
// Sample Output 1
// Copy
// 3
// If we stack the mochi with diameters of 
// 10, 
// 8 and 
// 6 centimeters from bottom to top in this order, we have a 
// 3-layered kagami mochi, which is the maximum number of layers.

// Sample Input 2
// Copy
// 3
// 15
// 15
// 15
// Sample Output 2
// Copy
// 1
// When all the mochi have the same diameter, we can only have a 
// 1-layered kagami mochi.

// Sample Input 3
// Copy
// 7
// 50
// 30
// 50
// 100
// 50
// 80
// 30
// Sample Output 3
// Copy
// 4

const fs = require("fs");
const fk = fs.readFileSync("/dev/stdin", "utf8");
let input = fk.split("\n")
let a = parseInt(input[0]);
let b=[]
for( i=1;i<=a;i++){
  b.push(parseInt(input[i]))
}
newArr=[]
if (a===b.length){
  for(j=0;j<a;j++){
    if (!newArr.includes(b[j])){
      newArr.push(b[j])
    }
  }
}
console.log(newArr.length);