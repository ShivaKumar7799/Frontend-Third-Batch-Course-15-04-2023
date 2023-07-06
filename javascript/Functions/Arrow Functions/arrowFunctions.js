//regular function

sayHello();


function sayHello(){
    console.log("hello")
}

// arrow Functions 

const sayHii = () => console.log("hii")

sayHii()


function addition(a,b){
    console.log(a+b,"addition")
    return a+b;
}

let summation = addition(2,4)
console.log(summation)

const subtraction = (a,b) => {
    return a-b
}

let subValue = subtraction(3,9)
console.log(subValue,"subtraction")