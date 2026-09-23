// Create:
// let age = 20;
// Check whether the person is eligible to vote.
// Condition:
// age >= 18 → Eligible
// age < 18  → Not eligible

let age = 20;

if (age >= 18){
    console.log("You are eligible for vote.");
}
else{
    console.log("You are not eligible for vote");
}

// Check age category
if (age >= 0 && age <= 12) {
    console.log("Child");
} else if (age >= 13 && age <= 17) {
    console.log("Teenager");
} else if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Invalid age");
}