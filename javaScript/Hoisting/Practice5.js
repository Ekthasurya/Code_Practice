// Interview-Style Hoisting

// Don't run this immediately.

// Predict the output line by line:

console.log(a);  //undefined

var a = 10;

function test() {
    console.log(a); //undefined

    var a = 20;

    console.log(a); //20
}

test();

console.log(a); // 10

//A local variable can shadow a global variable because the local var declaration is processed within the function scope.