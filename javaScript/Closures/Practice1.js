// Basic Closure

// Create:

// function outer() {
//     let message = "Hello JavaScript";

//     function inner() {
//         console.log(message);
//     }

//     return inner;
// }


function outer(){
    let message = "Hello JavaScript";

    function inner(){
        console.log(message)
    }
    return inner;
}

const greet = outer();

greet();

// Hello JavaScript
