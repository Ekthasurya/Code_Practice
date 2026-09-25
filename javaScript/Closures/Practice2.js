// Counter Closure

// Create a function:

function createCounter() {
    let count = 0;

    function innerCounter(){
        count ++;
        console.log(count);
    }
    return innerCounter;
}

let greet = createCounter();
greet();
greet();
greet();
greet();

