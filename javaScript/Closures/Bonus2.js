// Once-Only Function

// Create:

// function once() {
//     // your code
// }
// It should allow the returned function to execute only once.

function once() {
    let executed = false;
    function inner(){
        if (!executed){
            console.log(" Function executed");
            executed = true;
        }
    }

    return inner;
}

let runOnce =once();
runOnce();
runOnce();
