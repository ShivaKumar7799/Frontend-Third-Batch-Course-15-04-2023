// loops - for, while, do-while 

// for(initial value; condition; arthematic operation){
//     logic
// }

for(let i = 10; i >= 1 ; i--){
   console.log(i)
}

const fruits = ["apple", "banana", "papaya", "grapes", "pine apple"]

//  index < 4, index <= 3, index < fruits.length , index <= fruits.length - 1

for(let index = 0; index <= fruits.length - 1 ; index++ ){
    console.log(fruits[index])
}


const technology = "java Script";

for(let i = 0; i <=  technology.length - 1; i++){
   if(technology[i] !== "" ){
     console.log(technology[i], "forward")
   }
}

for(let i = technology.length - 1; i >= 0  ; i--){
    if(technology[i] !== " " ){
     console.log(technology[i],"backward")
    }
 }



//  while loop 

let i = 1;

while(i <= 10){
    console.log(i)
    i++
}

console.clear()

// do - while

// let j = 1;

// do{
//     console.log(j)
//     j++
// }
// while(j <= -10)


do{
    var bananaCount = Number(prompt("how many banana's you want?"))
}while(isNaN(bananaCount) === true)

console.log("take banana's")

