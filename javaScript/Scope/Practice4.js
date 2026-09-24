// Same Variable Name
// Create:
let name = "Surya";

function test() {
    let name = "Rahul";

    console.log(name);
}

test();

console.log(name);
//Local variable takes priority over a global variable with the same name.


