//find name percentage
//find greter percenmtage



const fk = require("fs").readFileSync("/dev/stdin", "utf8");
const input = fk.split("\n");
console.log(input);
const names = input[0].split(" ");
const marks= input[1].split(" ").map(Number);
const fullMarks= input[2].split(" ").map(Number);
const percentage =[];
for( let i=0 ; i< names.length; i++ ){
     percentage.push(marks[i]/fullMarks[i]*100);
  
}

console.log(percentage);

let highestPercentage =0;

for (let j =0; j<=percentage.length; j++){
  
  if (percentage[j] > highestPercentage){
     highestPercentage=percentage[j];
    }
   
}
console.log(highestPercentage);








