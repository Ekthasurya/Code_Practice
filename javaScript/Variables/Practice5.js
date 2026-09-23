// Create variables for an online shopping order:

// productPrice = 1200
// quantity = 3
// discount = 10

// Calculate:

// Total price
// Discount amount
// Final price after discount

const productPrice = 1200;
const quantity = 3;
const discount = 10;

const Totalprice = productPrice * quantity;
const DiscountAmount = (Totalprice * discount)/100;
const FinalPrice = Totalprice - DiscountAmount;

console.log("Total Price:", Totalprice);           
console.log("Discount Amount:", DiscountAmount);   
console.log("Final Price:", FinalPrice);          



