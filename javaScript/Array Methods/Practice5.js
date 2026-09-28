// // Create:
// const users = [
//     {
//         name: "Surya",
//         age: 27,
//         role: "Developer",
//         salary: 50000
//     },
//     {
//         name: "Rahul",
//         age: 22,
//         role: "Designer",
//         salary: 40000
//     },
//     {
//         name: "Amit",
//         age: 30,
//         role: "Developer",
//         salary: 60000
//     },
//     {
//         name: "Priya",
//         age: 25,
//         role: "Tester",
//         salary: 45000
//     }
// ];

// Use array methods to solve these.

// 1. map()

// Create an array containing only names.

// Expected:

// ["Surya", "Rahul", "Amit", "Priya"]
// 2. filter()

// Get only developers.

// Expected:

// [
//     { name: "Surya", ... },
//     { name: "Amit", ... }
// ]
// 3. filter()

// Get users whose age is greater than 25.

// Expected:

// Surya
// Amit
// 4. reduce()

// Calculate the total salary.

// Expected:

// Total salary: 195000
// 5. find()

// Find the user whose name is "Amit".

// Expected:

// {
//     name: "Amit",
//     age: 30,
//     role: "Developer",
//     salary: 60000
// }


const users = [
    {
        name: "Surya",
        age: 27,
        role: "Developer",
        salary: 50000
    },
    {
        name: "Rahul",
        age: 22,
        role: "Designer",
        salary: 40000
    },
    {
        name: "Amit",
        age: 30,
        role: "Developer",
        salary: 60000
    },
    {
        name: "Priya",
        age: 25,
        role: "Tester",
        salary: 45000
    }
];


// 1. map()
// Get only names

const names = users.map(user => user.name);

console.log("Names:", names);


// 2. filter()
// Get only developers

const developers = users.filter(user => user.role === "Developer");

console.log("Developers:", developers);


// 3. filter()
// Get users whose age is greater than 25

const olderUsers = users.filter(user => user.age > 25);

console.log("Users older than 25:");

olderUsers.forEach(user => {
    console.log(user.name);
});


// 4. reduce()
// Calculate total salary

const totalSalary = users.reduce((total, user) => {
    return total + user.salary;
}, 0);

console.log("Total salary:", totalSalary);


// 5. find()
// Find user named Amit

const amit = users.find(user => user.name === "Amit");

console.log("Amit:", amit);