// Find Even and Odd Numbers
// Create:
// let n = 20;
// Use a loop to print numbers from 1 to 20
// For every number, determine whether it is:
// Even
// Odd

let n = 20;
let Evensum=0;
let oddSum=0
for ( let i = 1; i<=n; i++){
    if (i%2===0){
     console.log(i,"-> Even");
     Evensum +=i;
    }
    else{
        console.log(i,"->Odd");
        oddSum +=i;
    }
}

console.log(Evensum);
console.log(oddSum);