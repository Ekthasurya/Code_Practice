// Greeting Callback
// Create:
// function greetUser(name, callback) {
//     // your code
// }
// Create two callback functions:
// welcomeMessage
// goodbyeMessage

function greetUser(name, callback) {
    return callback(name);
}

function welcomeMessage(name){
    return "Welcome to Our Family" + name;
}

function goodbyeMessage(name){
    return " Good Bye!" + name;
}

console.log(greetUser(" Surya",welcomeMessage));
console.log(greetUser(" Surya",goodbyeMessage));