// // Callback with Success & Error

// Create:
// function loginUser(username, password, successCallback, errorCallback) {
//     // your code
// }

// Correct credentials:
// username = "admin"
// password = "1234"

// If both are correct:
// successCallback();

// Otherwise:
// errorCallback();

// Create:

// function loginSuccess() {
//     console.log("Login successful");
// }

// function loginError() {
//     console.log("Invalid username or password");
// }

function loginUser(username, password, successCallback, errorCallback) {
    if (username === "admin" && password === "1234" ){
        return successCallback();
    }
    else
    {
        return errorCallback();
    }
}

function loginSuccess() {
    console.log("Login successful");
}

function loginError() {
    console.log("Invalid username or password");
}

loginUser("admin", "1234", loginSuccess, loginError);

loginUser("admin", "1111", loginSuccess, loginError);




