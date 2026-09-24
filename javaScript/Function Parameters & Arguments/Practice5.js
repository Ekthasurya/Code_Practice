// Real-World Shopping Function
// Create a function:calculateBill(price, quantity, discount)
// It should calculate:

// Step 1
// Total = price × quantity
// Step 2
// Discount Amount = Total × discount / 100
// Step 3
// Final Price = Total - Discount Amount

// Call:

// calculateBill(1000, 3, 10);

function calculateBill(price, quantity, discount){
    let total = price * quantity;
    let discountAmount = (total * discount)/100;
    let finalPrice = total-discountAmount;

    console.log("Total:", total);
    console.log("Discount Amount:", discountAmount);
    console.log("Final Price:", finalPrice);

}

calculateBill(1000, 3, 10);