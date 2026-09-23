// Create:
// let username = "admin";
// let password = "12345";
// Create a simple login checker.
// Conditions

// If username and password are both correct: Login successful
// If username is incorrect:Invalid username
// If username is correct but password is incorrect:Invalid password

let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345"){
    console.log("Login successful");
}
else if(username !== "admin"){
    console.log("Invalid username");
}
else{
    console.log("Invalid password")
}



