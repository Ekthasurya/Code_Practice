// Real-World User Processing

// Create:

// const users = [
//     { name: "Surya", age: 27, role: "developer" },
//     { name: "Rahul", age: 22, role: "designer" },
//     { name: "Amit", age: 30, role: "developer" },
//     { name: "Priya", age: 25, role: "tester" }
// ];

// Create a higher-order function:

// function processUsers(users, callback) {
//     // your code
// }

// Create callbacks to:

// 1. Get only developer users

// Expected:

// Surya
// Amit
// 2. Get users older than 25

// Expected:

// Surya
// Amit
// 3. Get only user names

// Expected:

// Surya
// Rahul
// Amit
// Priya


const users = [
    { name: "Surya", age: 27, role: "developer" },
    { name: "Rahul", age: 22, role: "designer" },
    { name: "Amit", age: 30, role: "developer" },
    { name: "Priya", age: 25, role: "tester" }
];

function processUsers(users, callback) {
    let result =[];

    for (let user of users){
        const value = callback(user);

        if (value !== undefined){
            result.push(value)
        }
    }
    return result;
}

 function getDevelopers(user){
      if(user.role === "developer" ){
        return user.name
      }
 }

 function getOlderThan25(user){
      if(user.age >= 25){
        return user.name
      }
 }

 function getUserName(user){
    return user.name;
 }

 console.log(processUsers(users, getDevelopers));

console.log(processUsers(users, getOlderThan25));

console.log(processUsers(users, getUserName));


