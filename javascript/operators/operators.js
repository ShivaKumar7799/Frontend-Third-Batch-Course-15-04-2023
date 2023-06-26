// operators types:

// 1) Arthematic operators  ( +, - , * , /, %)
// 2) assignment operators  ( = )
// 3) conditional operators ( < , > , <=, >= , !)
// 4) logical operators  ( &&, ||, !)
// 5) increment or decrement operators (a++, a--)

// addition 

let a= 20;
let b = 30;
let sum = a + b;
console.log(sum, "addition");

// subtraction 

let c = 34;
let d = 12;

let subtraction = c - d;
console.log(subtraction, "subtraction")

// multiplication 

let perDaySalary = 800;
let noOfDays = 31;
let salary = perDaySalary * noOfDays;
console.log(salary, "salary")

// division 

let annualSalary = 78200;
let monthlySalary = annualSalary / 12;
console.log( monthlySalary.toFixed(3), "monthlySalary");

// we have ordered 2 pizza's for 3 person, how many pieces can be completely shared for everyone

let noOfPizzas = 5;
let totalPersons = 3;
let totalNoOfPieces = noOfPizzas * 4;

let remainingPiecesAfterSharing = totalNoOfPieces % totalPersons;
let shareForOnePerson = totalNoOfPieces / totalPersons
console.log( Math.floor(shareForOnePerson), remainingPiecesAfterSharing, "remaining");

// assignment operator 

let bookPrice = 30;
let sellingPrice = 20;

// conditional Operator 

let result = 100 >= 100
console.log(result)

// logical operator 


let results = (10 > 49) || (35 > 63);
console.log(results)

// and &&

// true  true  true
// true  false false
// false true  false
// false false false

//  or  ||

// true  true  true
// true  false true
// false true  true
// false false false


// not  !

// true false
// flase true

// increment or decrement operator 

// Increment - (++a) pre increment and (a++) post increment 

let f = 10;
let g = ++f;

console.log(f, g, "pre increment")

let h = 10;
let i = h++;

console.log(h, i, "post increment")