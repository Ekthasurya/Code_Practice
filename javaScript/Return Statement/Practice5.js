// Create:
// function calculateSalary(basicSalary, bonus, taxRate) {
//     // calculate salary
//     // return the result
// }
// Use this formula:

// Gross Salary = Basic Salary + Bonus

// Tax Amount = Gross Salary × Tax Rate / 100

// Final Salary = Gross Salary - Tax Amount

// Call:
// let salary = calculateSalary(30000, 5000, 10);

function calculateSalary(basicSalary, bonus, taxRate) {
    let grossSalary = basicSalary + bonus;
    let taxAmount = (grossSalary * taxRate)/100;
    let finalSalary = grossSalary - taxAmount;
    return{
        grossSalary:grossSalary,
        taxAmount:taxAmount,
        finalSalary:finalSalary
    }
}
let salary = calculateSalary(30000, 5000, 10);
console.log("Gross Salary : ",salary.grossSalary);
console.log("Tax Amount : ",salary.taxAmount);
console.log("Final Salary : ",salary.finalSalary);



