// https://atcoder.jp/contests/abs/tasks/practice_1

// Problem
// Your task is to process some data.
// You are given 
// 3 integers 
// a , 
// b , 
// c and a string 
// s. Output result of 
// a+b+c and string 
// s with a half-width break.

// Input
// Input will be given in the following format from Standard Input:

// a
// b 
// c
// s
// Output
// Output the result of 
// a+b+c and string 
// s with a half-width break in one line.

// Input Example #1
// Copy
// 1
// 2 3
// test




const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

const a = Number(input[0]);
const [b, c] = input[1].split(" ").map(Number);
const s = input[2];

console.log(a + b + c + " " + s);



































