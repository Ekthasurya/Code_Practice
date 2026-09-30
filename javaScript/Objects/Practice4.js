// Nested Objects

// Create:

// const user = {
//     name: "Surya",
//     age: 27,

//     address: {
//         city: "Kolkata",
//         state: "West Bengal",
//         country: "India"
//     },

//     skills: {
//         frontend: ["HTML", "CSS", "JavaScript", "React"],
//         backend: ["Node.js", "Express.js"],
//         database: ["MongoDB"]
//     }
// };

// Print the city.
// Print the state.
// Print the country.
// Print "React".
// Print "MongoDB".
// Print the complete frontend skills array.


const user = {
    name: "Surya",
    age: 27,

    address: {
        city: "Kolkata",
        state: "West Bengal",
        country: "India"
    },

    skills: {
        frontend: ["HTML", "CSS", "JavaScript", "React"],
        backend: ["Node.js", "Express.js"],
        database: ["MongoDB"]
    }
};

console.log("city :",user.address.city);
console.log("state :",user.address.state);
console.log("country :",user.address.country);
console.log(user.skills.frontend[3]);
console.log(user.skills.database[0]);
console.log(user.skills.frontend);