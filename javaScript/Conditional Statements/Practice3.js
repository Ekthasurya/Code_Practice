// Create:
// let marks = 78;
// Create conditions for:
// 90–100 → A
// 80–89  → B
// 70–79  → C
// 60–69  → D
// 40–59  → E
// Below 40 → Fail

let marks = 78;

if (marks >= 90 && marks <=100){
    console.log("A");
}
else if(marks >= 80 && marks <=89){
    console.log("B");
}
else if(marks >= 70 && marks <=79){
    console.log("C");
}
else if(marks >= 60 && marks <=69){
    console.log("D");
}
else if(marks >= 50 && marks <=59){
    console.log("E");
}
else if(marks >= 40 && marks <=49){
    console.log("F");
}
else if(marks >= 80 && marks <=89){
    console.log("B");
}
else if (marks <= 40){
    console.log("Fail")
}
else{
    console.log("Invaild Number");
}
