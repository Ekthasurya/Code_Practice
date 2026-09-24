// Nested Scope

// Create:
// let company = "ABC";

// function outer() {
//     let department = "IT";

//     function inner() {
//         let employee = "Surya";

//         // print company
//         // print department
//         // print employee
//     }

//     inner();
// }

// outer();

// Your task is to print:

// Company: ABC
// Department: IT
// Employee: Surya

let company = "ABC";

function outer() {
    let department = "IT";

    function inner() {
        let employee = "Surya";

        console.log("Company :", company);
        console.log("Department :", department);
        console.log("Employee :",employee);
    }

    inner();
}

outer();