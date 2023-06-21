// we can declare the variable in 3 types 
// they are var (1995-2015) , let and const (after 2015) => es6 version

// variables declared with var 

// 1) varibles declared with var can be redeclared 

var a = 5;
var a = 10;
console.log(a)

// 2) varibales declared with var can be reassigned or we change the data 
 
var b = 15;
    b = 3;
console.log(b)

// 3) we can access the varible before it was declared when we declare with var

console.log(carName)
var carName = "audi"
console.log(carName)

console.log(attendance)
var attendance = 20;
console.log(attendance)

// 4) we can access a variable before it was initialised with a value 

var companyName;
console.log(companyName)

// varibles declared with let 

// 1) varibles declared with let cannot be redeclared 

let x = 30;
// let x = 50;

// 2) varibales declared with let can be reassigned or we change the data 

let y = 35;
    y = 23;
console.log(y)

// 3) we cannot access the varible before it was declared, when we declare with let

// console.log(trainNumber) 
let trainNumber = 454545
console.log(trainNumber)

// 4) we can access a variable before it was initialised with a value 

let bloogroup;
console.log(bloogroup)


// variables declared with const 

// 1) varibles declared with const cannot be redeclared 

const z = 50;
// const z = 40;


// 2) varibales declared with const cannot be reassigned or we cannot change the data once it was declared

const favouriteColor = "red";
    //   favouriteColor = "blue"

console.log(favouriteColor)

// 3) we cannot access the varible before it was const, when we declare with let

// console.log(laptopName)
const laptopName = "dell"
console.log(laptopName)

// 4) we can access a variable before it was initialised with a value 

// const address;
// console.log(address)



