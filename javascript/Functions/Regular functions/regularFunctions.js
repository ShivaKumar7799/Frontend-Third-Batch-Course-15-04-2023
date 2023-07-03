// function functionName(){
//     // block of code that will be executed when we call this function 
// }

// functionName()

function sayHello(name){
    console.log("hello",name)
}

sayHello("Raju")
sayHello("Ravi")

//addition

function addition(a,b){  // passing values in the function defination are called parameters
    console.log(a+b, "addition")
}


addition(2,6)  // passing values in the function call are called arguments
addition(8,45)
addition(78,78)
addition(78,754)
addition(5,4)
addition(9,8)

//subtraction

function subtraction(a,b){
    console.log(a-b,"subtraction")
}

subtraction(2,6)
subtraction(18,12)

console.clear()


function summation(){
    var a = Number(document.getElementById("aValue").value)
    var b = Number(document.getElementById("bValue").value)
    console.log( a+b, "sum")
    if( !isNaN(a) && !isNaN(b)){
        document.getElementById("result").innerHTML = `The addition of ${a} and ${b} = ${a+b}  `;
    }else{
        document.getElementById("result").innerHTML = "Please enter valid values"
    }
    
}

function sub(){
    var a = Number(document.getElementById("aValue").value)
    var b = Number(document.getElementById("bValue").value)
    console.log( a-b, "sub")
    document.getElementById("result").innerHTML = `The Subtraction of ${a} and ${b} = ${a-b}  `;
}

function reverseName(){
    var name = document.getElementById("name").value;
    console.log( name.split("").reverse().join("").replaceAll(",", ""))
    document.getElementById("reverseName").innerHTML = `Reverse name for ${name} is ${ name.split("").reverse().join("").replaceAll(",", "")}  `
}

function multiplication(a,b){
    let product = a * b;
    return product
}

var productOfNumbers =  multiplication(4,5)


setTimeout(() => {
    console.log(productOfNumbers)
}, 5000);


function showResult(){
    console.log(productOfNumbers)
}