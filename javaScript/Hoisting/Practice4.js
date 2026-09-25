// Function Expression Hoisting

// Now compare this:
greet1();

var greet1 = function() {
    console.log("Hello");
};

//TypeError: greet is not a function

greet2();

let greet2 = function() {
    console.log("Hello");
};

//ReferenceError: Cannot access 'greet' before initialization

greet3();

const greet3 = function() {
    console.log("Hello");
};

//ReferenceError: Cannot access 'greet' before initialization
