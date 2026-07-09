//Class Task 1

// let userName = prompt('Enter your name :');
// let age = + prompt('Enter your age :');



// if (userName && age > 80) {
//     alert(userName + " " + 'not drive' + " " + 'because age is ' + " " +  age)

// }
// else if(userName && age >=18  ){
//     alert(userName + " " + 'Can drive' + " " + 'because age is ' + " " +  age)

// }
// else {
//     alert('You can not drive')

// } 


//Class Task 2

// let number = + prompt('Enter any number :');
// let limit = + prompt('Enter limit number :');

// for (let i = 1; i <=limit; i++) {
//   console.log(`${number} * ${i} = ${number*i}`)

// }

//Class Task 3

// let i = 1;
// while (i<=10) {
//     if (i%2 === 0) {
//         console.log(`${i} : Even Number`)
//     }
//     else if(i%2 !==0){
//         console.log(`${i} : Odd Number`)

//     }
//     i++;
// }


//Class Task 4

// function AddProduct(a,b,c) {
//     console.log(`Sum = ${a+b+c}`)  
//     console.log(`Product = ${a*b*c}`)  
// }
// AddProduct(5,5,6)                              

//Class Task 5


// let wonderWorlds = ["China","Jordan","Italy","Mexicoa","Peru","Agraa","Brazil"]

// for (let i = 0; i < wonderWorlds.length; i++) {
//    console.log(wonderWorlds[i])

// }


//Class Task 6

// let animals = ["Lizard - Reptiles", "Eagle - Birds", "Ant - Insects",   "Shark - Pisces", "Snake - Reptiles", "Cow - Mammal", "Butterfly - Insects",  "Sparrow - Birds",  "Frog - Amphibian", "Lion - Mammal"]  

// let lowerCase = animals.map((animal)=> {return animal.toLowerCase()})
// console.log(lowerCase)

// let filterMammal = lowerCase.filter((m)=>{
//     if (m.includes("mammal")) {
//         return m
//     }
// })
// console.log(filterMammal)

// let filterReptiles = lowerCase.filter((r)=>{
//     if (r.includes("reptiles")) {
//        return r
//     }
// })
// console.log(filterReptiles)

// let filterPisces = lowerCase.filter((p)=>{
//     if (p.includes("pisces")) {
//         return p
//     }
// })
// console.log(filterPisces)

// let filterAmphibian = lowerCase.filter((a)=>{
//     if (a.includes("amphibian")) {
//         return a
//     }
// })

// console.log(filterAmphibian)


// let filterBirds = lowerCase.filter((b)=>{
//     if (b.includes("birds")) {
//         return b
//     }
// })
// console.log(filterBirds)

// let filterInsects = lowerCase.filter((i)=>{
//     if (i.includes("insects")) {
//         return i
//     }
// })
// console.log(filterInsects)

//Assignment 1

// const employees = [
//   {
//     name: "Ali Khan",
//     age: 28,
//     salary: 50000,
//     department: "IT",
//     gender: "Male"
//   },
//   {
//     name: "Sara Ahmed",
//     age: 25,
//     salary: 45000,
//     department: "HR",
//     gender: "Female"
//   },
//   {
//     name: "Usman Tariq",
//     age: 32,
//     salary: 70000,
//     department: "Finance",
//     gender: "Male"
//   },
//   {
//     name: "Ayesha Malik",
//     age: 29,
//     salary: 55000,
//     department: "Marketing",
//     gender: "Female"
//   },
//   {
//     name: "Hamza Raza",
//     age: 35,
//     salary: 80000,
//     department: "IT",
//     gender: "Male"
//   },
//   {
//     name: "Fatima Noor",
//     age: 27,
//     salary: 48000,
//     department: "Sales",
//     gender: "Female"
//   },
//   {
//     name: "Bilal Hussain",
//     age: 30,
//     salary: 62000,
//     department: "Operations",
//     gender: "Male"
//   },
//   {
//     name: "Zainab Ali",
//     age: 26,
//     salary: 47000,
//     department: "Customer Support",
//     gender: "Female"
//   },
//   {
//     name: "Omar Sheikh",
//     age: 40,
//     salary: 90000,
//     department: "Management",
//     gender: "Male"
//   },
//   {
//     name: "Hina Javed",
//     age: 31,
//     salary: 65000,
//     department: "Finance",
//     gender: "Female"
//   }
// ];

// let employeeNames = employees.map((emp)=>{
//   if (emp.gender === 'Male') {
//     return 'Mr. ' + emp.name
//   }
//   else if(emp.gender === 'Female'){
//     return 'Mrs. ' + emp.name

//   }
// })
// console.log(employeeNames);