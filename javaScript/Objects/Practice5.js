// Real-World MERN User Object

// const user = {
//     id: 101,
//     name: "Surya",
//     email: "surya@example.com",
//     age: 27,
//     isActive: true,

//     role: "Developer",

//     skills: [
//         "JavaScript",
//         "React",
//         "Node.js",
//         "Express.js",
//         "MongoDB"
//     ],

//     address: {
//         city: "Kolkata",
//         state: "West Bengal"
//     }
// };

// 1. Print user information
// Name:
// Email:
// Role:
// City:
// 2. Add a new skill

// Add:

// "Tailwind CSS"
// 3. Update the role

// Change:

// Developer

// to:

// MERN Stack Developer
// 4. Check whether the user is active

// Print:

// User is active

// or:

// User is inactive
// 5. Create a profile message

// Generate:

// Surya is a MERN Stack Developer from Kolkata.


const user = {
    id: 101,
    name: "Surya",
    email: "surya@example.com",
    age: 27,
    isActive: false,

    role: "Developer",

    skills: [
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB"
    ],

    address: {
        city: "Kolkata",
        state: "West Bengal"
    }
};

console.log(user.name);
console.log(user.role);
console.log(user.email);

user.skills.push("Tailwind CSS");

user.role = "Mern Stack developer";

if (user.isActive){
    console.log("User is active");
}
else{
    console.log("User is inactive");
}

let profileMessage = `${user.name} is ${user.role} from ${user.address.city}. `
console.log(profileMessage);