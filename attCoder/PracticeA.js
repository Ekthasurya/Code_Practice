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


const fs = require("fs");
const fk = fs.readFileSync("/dev/stdin", "utf8");
const g = fk.split("\n");
const a = parseInt(g[0]);
const value =g[1].split(" ");
const b = parseInt(value[0]);
const c = parseInt(value[1]);
const s =g[2];
const sum = a + b + c;
console.log(sum + " " + s);

































