// Create:
// let age = "27";
// let price = "999";
// let isLoggedIn = "true";

// Convert:
// "27" → Number
// "999" → Number
// "true" → Boolean

// Then print the converted values and their data types.

let age = "27";
let price = "999";
let isLoggedIn = "true";

let convertAge = Number(age);
let convertPrice = Number(price);
let convertIsLoggedIn = Boolean(isLoggedIn)
console.log(convertAge,convertPrice,convertIsLoggedIn);

console.log( typeof convertAge);
console.log( typeof convertPrice);
console.log( typeof convertIsLoggedIn);
