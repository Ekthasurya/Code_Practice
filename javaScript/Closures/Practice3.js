// Private Bank Balance

// Create:

// function createBankAccount(initialBalance) {
//     // create balance
//     // create functions
//     // return them
// }

// Your account should have three operations:
// deposit(amount)
// withdraw(amount)
// getBalance()

function createBankAccount(initialBalance) {
    let balance =initialBalance;
    function deposit(amount){
        balance += amount
    }

    function withdraw(amount){
        if (amount <= balance){
            balance -= amount;
        }
        else{
            "insufficient balance";
        }
    }

    function getBalance(){
        return balance
    }

    return {
        balance,
        deposit,
        withdraw,
        getBalance
    }
    
}


const account = createBankAccount(1000);
console.log(account.balance)
account.deposit(500);
console.log(account.getBalance());
account.withdraw(300);
console.log(account.getBalance());