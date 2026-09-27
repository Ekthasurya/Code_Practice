// Callback + setTimeout

// Predict the output:
console.log("A");

setTimeout(() => {
    console.log("B");
}, 2000);

console.log("C");    ///A,C,B