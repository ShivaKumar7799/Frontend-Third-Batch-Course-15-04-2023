// higher order functions - if we are sending a function as an argument to another function or
//                          the function returns another function is called higher order function 

// callBack function - if we passing a function as an parameter then it is called callback function 

const pi = 3.14;


function add(a,b){
    let sum = a + b;
    return sum
}

const subtraction = (a,b) => {
    return a-b
}

const multiplication = (a,b) => a*b

const division = (a,b) => a/b

function consoleOutput(res){
    console.log(res)
}

function displayOnScreen(res){
    document.getElementById("result").innerHTML = `Result = ${res}`
}

function alertOutput(res){
    alert(res)
}


function calculate(a, b , operation, outputType){
    let result = operation(a,b)
    outputType(result) 
}



calculate(35,53,add,consoleOutput);
// calculate(45,12,subtraction,alertOutput)
calculate(12,2,multiplication,displayOnScreen)
calculate(100,5,division, consoleOutput)


// calculate diameter, area, circumference, perimeter of a circle 
