const sachin = {
    firstName : "Sachin",
    lastName : "Tendulkar",
}

const ganguly = {
    firstName : "Sourav",
    lastName : "Ganguly",
}

const yuvraj = {
    firstName : "yuvraj",
    lastName : 'Singh',
}

const personFullName = {
    fullName : function(iplTeam, matches){
        console.log(`${this.firstName} ${this.lastName} and ipl team is ${iplTeam} -- ${matches} `)
    }
}

// sachin.fullName()
// ganguly.fullName()
// yuvraj.fullName()

// bind method 

personFullName.fullName.bind(sachin)("mumbai",120)
personFullName.fullName.bind(ganguly)("Kolkata",87)
personFullName.fullName.bind(yuvraj)("punjab",95)



// call 

personFullName.fullName.call(sachin, "mumbai",120)
personFullName.fullName.call(ganguly,"kolkata",87)
personFullName.fullName.call(yuvraj,"punjab",95)


// apply 

const sachinData = ["mumbai", 129]

personFullName.fullName.apply(sachin, sachinData )
personFullName.fullName.apply(ganguly, ["kolkata", 87])
personFullName.fullName.apply(yuvraj, ["punjab", 95])

