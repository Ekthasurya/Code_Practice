// Add, Update and Delete Properties

// Create:
// const user = {
//     name: "Surya",
//     age: 27,
//     role: "Developer"
// };

// Perform these operations:

// Add city: "Kolkata".
// Add salary: 50000.
// Change role from "Developer" to "MERN Developer".
// Change age to 28.
// Delete the city property.
// Print the final object.


const user = {
    name: "Surya",
    age: 27,
    role: "Developer"
};

user.city ="Kolkata";
user.salary = 16349;

user.age =28;
user.role = " MERN Developer";

delete user.city;
console.log(user);
