// Real-World Function
// Create a function:calculateSalary(basicSalary, bonus, tax)
// The function should calculate the final salary.
// Formula:
// Gross Salary = Basic Salary + Bonus

// Tax Amount = Gross Salary × Tax / 100

// Final Salary = Gross Salary - Tax Amount

function calculateSalary(basicSalary, bonus, tax){
    let grossSalary =basicSalary + bonus;
    let taxAmount = (grossSalary * tax)/100;
    let finalSalary = grossSalary - taxAmount;
    return {
        grossSalary: grossSalary,
        taxAmount: taxAmount,
        finalSalary: finalSalary
    };
}

let salary = calculateSalary(30000, 5000, 10);
console.log("Gross Salary:", salary.grossSalary);
console.log("Tax Amount:", salary.taxAmount);
console.log("Final Salary:", salary.finalSalary);

