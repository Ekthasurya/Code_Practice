// Different Types of Arguments 
// Create: createUser(name, age, isDeveloper)
// The function should print:

// Name: Surya
// Age: 27
// Developer: true

function createUser(name, age, isDeveloper){
    return {
       name:name,
       age:age,
       isDeveloper:isDeveloper

    }
}

let user = createUser("Surya", 27, true);
console.log(user.name);
console.log(user.age);
console.log(user.isDeveloper);
