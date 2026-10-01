// Object.assign()

// Create:
// const personalInfo = {
//     name: "Surya",
//     age: 27
// };

// const jobInfo = {
//     role: "MERN Developer",
//     experience: "1.5 years"
// };


const personalInfo = {
    name: "Surya",
    age: 27
};

const jobInfo = {
    role: "MERN Developer",
    experience: "1.5 years"
};

// for (let i =6; i<= 60; i= i+6){
//     console.log(i);
// }
let employee ={};
Object.assign(employee,personalInfo,jobInfo);
console.log(employee);



