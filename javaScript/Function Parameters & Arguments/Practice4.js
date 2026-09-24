// Default Parameters
// Create:
// function greet(name = "Guest") {
//     // your code
// }

function greet(name = "Guest") {
    return name;
}
// console.log(greet("Surya"));
// console.log(greet("Rahul"));
// console.log(greet());

console.log(greet(undefined));
console.log(greet(null));
console.log(greet(""));
