// conditional statements - if, if-else, else-if, switch 

// let voterAge = Number(prompt("Please enter your age"));


// if(voterAge >= 18){
//     console.log("go to vote")
// }

// if-else 

// if(voterAge >= 18){
//     console.log("eligible to vote")
// }else{
//     console.log("not eligible to vote")
// }

const currentDate = new Date()
const hour = currentDate.getHours()

if(hour < 12){
    console.log("am")
}else {
    console.log("pm")
}

// else if 

const percentage = 98;

if(percentage == 100){
    console.log("O grade")
}else if(percentage > 90 && percentage < 100){
    console.log("A grade")
}else if(percentage > 80 && percentage < 90){
    console.log("B grade")
}else if(percentage > 70 && percentage < 80){
    console.log("c Grade")
} else {
    console.log("Fail")
}

// switch case 


const date = prompt("enter today date")


switch(date){
    case "monday" : {
        console.log("working day")
        break
    }
    case "tuesday" : {
        console.log("working day")
        break
    }
    case "wednesday" : {
        console.log("working day")
        break
    }
    case "thursday" : {
        console.log("working day")
        break
    }
    case "friday" : {
        console.log("working day")
        break
    }
    case "saturday" : {
        console.log("holiday")
        break
    }
    case "sunday" : {
        console.log("holiday")
        break
    }
    default : {
        console.log("please enter valid day")
    }
}






