// reduce(), forEach(), and some()

// Given:
// const prices = [100, 250, 300, 150, 500];

// 1. forEach()

// Print every price:100,250,300
// 150
// 500
// 2. reduce()

// Calculate the total:

// Total: 1300
// 3. some()

// Check whether any price is greater than 400.

// Expected:

// true
// 4. every()

// Check whether every price is greater than 50.

// Expected:

// true
// 5. reduce() challenge

// Calculate the total price after adding a 10% tax.

// Expected:

// 1430


const prices = [100, 250, 300, 150, 500];

prices.forEach(price =>{
    console.log(price);
})
let total =prices.reduce((sum,price)=>{
    return sum + price;
},0)
console.log(total);

const hasExpensivePrice = prices.some(price => price >400);
console.log(hasExpensivePrice);

const allGreaterThan50 = prices.every(price => price >50);
console.log(allGreaterThan50);

let totalWithTax =prices.reduce((sum,price)=>{
    return sum + price;
},0)

let tax = totalWithTax * 10/100;
let finalPrice = totalWithTax + tax;
console.log(finalPrice);



