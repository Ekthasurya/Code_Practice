// Create:
// let age = 25;
// let hasLicense = true;
// let hasCar = false;
// Determine:
// 1. Can the person drive?
// Requirement:age >= 18 AND hasLicense must be true
// 2. Can the person travel?
// Requirement:Person has a car OR has a license
// 3. Does the person NOT have a car?

let age = 25;
let hasLicense = true;
let hasCar = false;

let canDrive = age >= 18 && hasLicense;
console.log(" Can drive :", canDrive);

let canTravel = hasCar === false || hasLicense === true;
console.log(" Can Travel :", canDrive );

let doesNotHaveCar = !hasCar;
console.log(" Does not have car :",doesNotHaveCar);
