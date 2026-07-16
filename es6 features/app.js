
// Class Objects

// class Product {
//     constructor(id,name,brand,price,category,stock) {
//         this.id = id;
//         this.name = name;
//         this.brand = brand;
//         this.price = price;
//         this.category = category;
//         this.stock = stock;
//     }
// }

// let Product1 = new Product(1,"Laptop","Dell",30000,"Electronics","Available");
// let Product2 = new Product(2,"mouse","Dell",1500,"Electronics","Not Available");
// let Product3 = new Product(3,"Keyboard","Dell",3000,"Electronics","Available");

// console.log(Product1,Product2,Product3);


// Rest Operators

// let add = (a,b,...c)=>{
//     return a + b + c.reduce((a,b)=>a+b)
// }
// console.log(`Sum = ${add(2,4,3,3)}`)

// let mul = (a,b, ...c)=>{
//     return a * b * c.reduce((a,b)=> a*b)
// }
// console.log(`Multiply = ${mul(2,4,3,3)}`)

// let sub = (a,b,...c)=>{
//     return a-b -( c.reduce((x,y)=>x-y))
// }
// console.log(`Subtract = ${sub(14,2,3,2)}`)

// Spread Operators

// let fruits = ['apple','mango','banana','cherry']

// let fruitAndVegies = ['potato','tomato','onion', ...fruits]

// console.log(fruitAndVegies)