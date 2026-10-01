// Create a base object:

// const person = {
//     greet() {
//         console.log("Hello!");
//     }
// };

// Create another object using:

// Object.create(person)

// Add:
// name
// age

// to the new object.
// Then:
// 1. Call greet().
// 2. Check whether name is the object's own property.
// 3. Check whether greet is the object's own property.
// Use:
// Object.hasOwn()

const person = {
    greet() {
        console.log("Hello!");
    }
};

let user = Object.create(person);
user.name= "surya";
user.age = 27;

user.greet()

console.log(Object.hasOwn(user,"name"));
console.log(Object.hasOwn(user,"greet"));



