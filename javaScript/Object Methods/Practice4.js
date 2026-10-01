// Object.freeze() and Object.seal()

// Create:
// const user = {
//     name: "Surya",
//     age: 27,
//     role: "Developer"
// };

// Part A — Object.freeze()
// Use:
// Object.freeze(user);

// Then try to:
// 1. Change age to 28.
// 2. Add salary.
// 3. Delete role.
// Check what happens.


// Part B — Object.seal()
// Create another object:
// const employee = {
//     name: "Rahul",
//     age: 25
// };

// Use:
// Object.seal(employee);

// Then:
// 1. Change age.
// 2. Add salary.
// 3. Delete name.
// Goal


const user = {
    name: "Surya",
    age: 27,
    role: "Developer"
};

Object.freeze(user);

user.age =28;
console.log(user)

const employee = {
    name: "Rahul",
    age: 25
};

employee.name="surya";
employee.salary=16399;
console.log(employee);