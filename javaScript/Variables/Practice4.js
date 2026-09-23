// Create:
// let a = 10;
// let b = 20;

// Swap their values so that:

// a = 20
// b = 10

let a =10;
let b =20;

let temp = a;
a=b;
b = temp;

console.log(a,b)



let c = 10;
let d = 20;

[c, d] = [d, c];

console.log(c); // 20
console.log(d); // 10