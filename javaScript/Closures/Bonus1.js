// Create:
// function createUser(password) {
//     // create a function called checkPassword
// }

// It should allow:
// const user = createUser("12345");

// console.log(user("12345"));

function createUser(password) {
    function checkPassword(inputPassword){
        if (password === inputPassword){
            return true;
        }
        else{
            return false;
        }
    }

    return checkPassword;
}

let user = createUser("12345");
console.log(user("12345"));
console.log(user("abcsd"));