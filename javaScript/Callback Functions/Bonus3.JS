// // Create Your Own forEach



// function myForEach(array, callback) {
//     // your code
// }

// // It should work like:
// myForEach([10, 20, 30], function(number) {
//     console.log(number);
// });



function myForEach(array, callback) {

    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }

}

myForEach([10, 20, 30], function(number) {
    console.log(number);
});
