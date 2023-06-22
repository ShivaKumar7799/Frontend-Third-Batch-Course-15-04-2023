// Hoisting :
// if we want to access a variable or a function before it was declared, 
// for var it will undefined value and it will not throw any errors
// for let and const it is giving uncaught reference error


console.log(carName)
var carName = "Audi"

console.log(laptopName)
let laptopName = "hp"