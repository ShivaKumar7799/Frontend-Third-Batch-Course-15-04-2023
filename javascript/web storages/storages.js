function saveLocal(){
    console.log("save local");

    const userData = document.getElementById("userName").value
    let userValue = {
        userName : userData
    }
    userValue = JSON.stringify(userValue)
    localStorage.setItem("username", userValue )
}

function removeLocal(){
    localStorage.removeItem("username")
}

function saveSession(){
    console.log("save local");
    const userValue = document.getElementById("userName").value
    sessionStorage.setItem("username", userValue )
}

function removeSession(){
    sessionStorage.removeItem("username")
}

function getLocal(){
   document.getElementById("showData").innerHTML = JSON.parse(localStorage.getItem("username")).userName
}

function getSession(){
    document.getElementById("showData").innerHTML = sessionStorage.getItem("username")
 }
 


