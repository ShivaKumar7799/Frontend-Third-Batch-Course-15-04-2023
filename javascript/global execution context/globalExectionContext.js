console.log(a);
console.log(b);

var a = 10;
var b = 20;
let sum = a + b;
console.log(sum);
setTimeout(() => {
  console.log("timeout");
}, 10);
console.log("hello");

// function addition(a,b){
//     console.log(a+b)
// }

// addition(5,4)
// addition(2,3);

// console.log("hello")

fetch("https://jsonplaceholder.typicode.com/albums")
  .then((res) => res.json())
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

console.log("last line")