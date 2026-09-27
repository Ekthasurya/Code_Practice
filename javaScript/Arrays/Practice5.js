// Real-World Array of Users
// Create:
// const users = [
//     {
//         name: "Surya",
//         age: 27,
//         role: "Developer"
//     },
//     {
//         name: "Rahul",
//         age: 22,
//         role: "Designer"
//     },
//     {
//         name: "Amit",
//         age: 30,
//         role: "Developer"
//     },
//     {
//         name: "Priya",
//         age: 25,
//         role: "Tester"
//     }
// ];

// 1. Print all user names
// Surya
// Rahul
// Amit
// Priya
// 2. Print users older than 25
// Surya
// Amit
// 3. Count developers
// Developer count: 2
// 4. Find the oldest user
// Oldest user: Amit
// Age: 30
// 5. Create an array containing only the names

// Expected:

// ["Surya", "Rahul", "Amit", "Priya"]

const users = [
  {
    name: "Surya",
    age: 27,
    role: "Developer",
  },
  {
    name: "Rahul",
    age: 22,
    role: "Designer",
  },
  {
    name: "Amit",
    age: 30,
    role: "Developer",
  },
  {
    name: "Priya",
    age: 25,
    role: "Tester",
  },
];

console.log("All user name :")

for (let user of users){
    console.log(user.name);
}

console.log("who greater than 25 old : ");

for (let user of users){
    if(user.age >= 25){
        console.log(user.name);
    }
}

console.log("developer Count :");

let developerCount =0;

for (let user of users){
    if(user.role === "Developer"){
        developerCount++;
    }
}

console.log(developerCount);

console.log("oldest User :");
let oldestUser = users[0];

for (let user of users){
   if (user.age > oldestUser){
    oldestUser = user;
   }
}

console.log(oldestUser.name);
console.log(oldestUser.age);

let result =[];

for (let user of users){
     result.push(user.name);
}
console.log(result)







