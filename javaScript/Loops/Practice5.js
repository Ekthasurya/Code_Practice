// Find Prime Numbers

// Create:
// let n = 50;
// Print all prime numbers between 1 and 50.

let n =50;
for(let number =2; number<=n; number++){
      count =0;
      for(let i =1; i<=number; i++){
        if(number %i ===0){
            count++
        }
      }

      if(count ===2){
        console.log(number);
      }
}
