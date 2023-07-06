// default Parameters 

function multiplication(a,b,c= 1){
    console.log(arguments.length)
    console.log(a*b*c,"multiplication")
}

// function multiplication(a,b,c){
//     if(c == undefined){
//         c = 1
//     }
//     console.log(a*b*c,"multiplication")
// }


multiplication(4,4)


function ravi(name, country = "india"){
    console.log(name,country)
}

ravi("sreekanth","Australia")
