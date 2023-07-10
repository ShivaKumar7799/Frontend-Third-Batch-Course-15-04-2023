let count = 0;
let timerId

function startTimer(){
  timerId = setInterval(() => {
        count = count + 1;
        let seconds = count % 60;
        let minutes = (count/60);
        minutes = (Math.floor(minutes)) % 60;
        let hours = Math.floor(count / 3600) ;
        document.getElementById("seconds").innerHTML = seconds
        document.getElementById("minutes").innerHTML = minutes
        document.getElementById("hours").innerHTML = hours
   }, 1000);
   document.getElementById("startBtn").style.display = "none"
}

function stopTimer(){
    clearInterval(timerId)
    document.getElementById("startBtn").style.display = "block"
}

function reset(){
    
    clearInterval(timerId)
    count = 0;
    document.getElementById("seconds").innerHTML = "00"
    document.getElementById("minutes").innerHTML = "00"
    document.getElementById("hours").innerHTML = "00"
}