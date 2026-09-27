// Simulate an API Call

// Create:
// function fetchUser(callback) {
//     // simulate API delay
// }

// Inside the function, use:setTimeout()

// After 2 seconds, create this user:
// const user = {
//     name: "Surya",
//     role: "MERN Developer"
// };

// Then pass the user to the callback.
// function displayUser(user) {
//     // print user information
// }
// Call:
// fetchUser(displayUser);

function fetchUser(callback) {
    setTimeout(function(){

        const user = {
    name: "Surya",
    role: "MERN Developer"

};
    callback(user);

    },2000)
}

function displayUser(user) {
    console.log("Name:", user.name);
    console.log("Role:", user.role);
}

fetchUser(displayUser)
