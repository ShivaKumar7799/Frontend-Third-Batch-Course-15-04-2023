// setTimeout, setInterval and clear Interval 

let login = false;

setTimeout(() => {
    if(!login){
        alert("please login")
    }
}, 3000);

let interval = setInterval(() => {
    console.log("set interval")
},2000)

function stop(){
    clearInterval(interval)
}

function startInterval(){
    setInterval(() => {
        console.log("set interval")
    },2000)    
}