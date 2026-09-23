// Create:
// let balance = 10000;
// let withdrawalAmount = 5000;
// let pin = 1234;
// let enteredPin = 1234;
// Build a simple ATM withdrawal program.

// Conditions

// First check the PIN.

// If the PIN is incorrect:

// Incorrect PIN

// If the PIN is correct, check the withdrawal amount.

// If:

// withdrawalAmount <= balance

// allow the withdrawal.

// Output:

// Withdrawal successful
// Remaining balance: 5000

// If withdrawal amount is greater than balance:

// Insufficient balance
// Additional Conditions

// Also check:

// withdrawalAmount <= 0

// Output:

// Invalid withdrawal amount


let balance = 10000;
let withdrawalAmount = 5000;
let pin = 1234;
let enteredPin = 1234;

if (pin !== enteredPin){
    console.log("Incorrect PIN");
}
else if(withdrawalAmount <= 0){
    console.log("Invalid withdrawal amount");
}
else if(withdrawalAmount > balance){
    console.log("Insufficient balance");
}else{
    balance = balance-withdrawalAmount;
    console.log("Withdrawal successful")
    console.log("Remaining balance:",balance)
}

