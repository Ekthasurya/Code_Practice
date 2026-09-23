// You are creating an e-commerce checkout system.
// Create:
// let price = 2000;
// let quantity = 3;
// let discount = 10;
// let deliveryCharge = 100;

// Calculate: 
// Step 1 — Total price
// Step 2 — Discount amount
// Step 3 — Price after discount
// Step 4 — Final price


let price = 2000;
let quantity = 3;
let discount = 10;
let deliveryCharge = 100;

let TotalPrice = price * quantity;
console.log("Total Price :", TotalPrice);

let discountAmount = (TotalPrice * 10)/100;
console.log("Discount", discountAmount);

let priceAfterDiscount = TotalPrice - discountAmount;
console.log("Price After Amount :", priceAfterDiscount);

let FinalPrice = priceAfterDiscount + deliveryCharge;
console.log("Final Price : ", FinalPrice);
