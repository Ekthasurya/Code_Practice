// Real-World API Object

// Create:
// const user = {
//     id: 101,
//     name: "Surya",
//     email: "surya@example.com",
//     role: "Developer",
//     skills: ["JavaScript", "React", "Node.js"],
//     address: {
//         city: "Kolkata",
//         state: "West Bengal"
//     }
// };

// Get all keys
// Get all values
// Get all entries
// Check properties
// email
// salary
// skills  exist using:Object.hasOwn()
// Create a new object
// Create:
// const accountInfo = {
//     username: "surya123",
//     isActive: true
// };

const user = {
    id: 101,
    name: "Surya",
    email: "surya@example.com",
    role: "Developer",
    skills: ["JavaScript", "React", "Node.js"],
    address: {
        city: "Kolkata",
        state: "West Bengal"
    }
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(Object.hasOwn(user,"email"));
console.log(Object.hasOwn(user,"salary"));
console.log(Object.hasOwn(user,"skills"));

const accountInfo = {
    username: "surya123",
    isActive: true
};

const employee ={};
Object.assign(employee,user,accountInfo);
console.log(employee);

