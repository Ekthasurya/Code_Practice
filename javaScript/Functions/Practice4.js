// Create a function:
// checkAge(age)
// It should return:
// "Child" if age is below 13.
// "Teenager" if age is between 13 and 17.
// "Adult" if age is 18 or above.

function checkAge(age){
if(age < 0 || age >150){
      return "Invaild age";
}
   else if (age <13){
        return "Child";
    }
    else if (age <=17){
        return "Teenager";
    }
    else{
        return "Adult";
    }
}

console.log(checkAge(7));
console.log(checkAge(14));
console.log(checkAge(25));
console.log(checkAge(-177))
