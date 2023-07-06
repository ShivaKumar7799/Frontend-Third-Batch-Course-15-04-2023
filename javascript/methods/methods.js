// const student2 = {
//     name : "suresh",
//     pincode : {
//         pincode1 : 454545,
//         pincode2 : 565655
//     }
// }

// console.log(student2)
// // student2.pincode = 121335;
// student2.pincode.pincode3 = 455656
// console.log(student2)
// console.log(student2.pincode.pincode2)
// console.log(student2)



// methods 

// methods are nothing but storing function inside an object as a value 

var a = 20;
var b = 30;

function addition(){
    console.log(a+b)
}

function subtraction(){
    console.log(a-b)
}

const person = {
    firstName : "ravi",
    lastName : "kumar",
    fullName : function(city){
        console.log("hello", this.firstName, this.lastName , city, this);
        function sayHello(){
            console.log("hello", this)
        }
        sayHello()
    }
}

const person2 = {
    firstName : "suresh",
    lastName : "kumar",
    fullName : (city,age) => {
        console.log("hello", person2.firstName, person2.lastName , city,age,this)
        function sayHello(){
            console.log("hello", this)
        }
        sayHello()
    }
}

person.fullName("Hyderabad")

person2.fullName("Benguluru",24)




console.log(a)

const persons = ["shiva kumar", "Sreekanth", "Vaishnavi"]

console.log(persons)

// alert("hello")


