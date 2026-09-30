// Object with Methods

// Create a calculator object:

// const calculator = {
//     // your properties and methods
// };
// Add these methods:
// add()
// subtract()
// multiply()
// divide()

// Each method should accept two numbers.


const calculator = {
    add : function (a,b){
        return a+b;
    },
    subtract : function (a,b){
        return a-b;
    },
    muliply : function (a,b){
        return a*b;
    },
    divide : function (a,b){
        return a/b;
    },

};

console.log(calculator.add(2,3));
console.log(calculator.subtract(6,3));
console.log(calculator.muliply(2,3));
console.log(calculator.divide(9,3));

