// Function Declaration Hoisting

// Predict the output:

greet();

function greet() {
    console.log("Hello JavaScript");
}
//Hello JavaScript

// Now create:
add(10, 20);

function add(a, b) {
    console.log(a + b);
}
//30

//Function declarations are hoisted completely, including their function body, so they can be called before they appear in the code.

