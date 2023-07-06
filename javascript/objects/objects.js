// objects stores the data in the format of key,value pairs
// we can store any type of data in the objects.

const student1 = ["ravi kumar", 26, "Software developer", "Hyderabad", "India", true, 500016, 4656, "12/33" ];

const student2 = {
    name : "Sreekanth",
    favouriteTech : "frontend",
    projectsDone : ["stopwatch", "calculator", "student form"],
    pincode : {
        pincode1 : 414565,
        pincode2 : 452416
    },
    address : "Hyderabad",
    country : "India"
}

console.log(student1[0])
console.log(student2.name);
console.log(student2.favouriteTech)
console.log(student2.address)
console.log(student2.pincode);
console.log(student2.projectsDone[2]);

console.log(student2.state)

// student2.pincode = 500013;
student2.state = "Telengana"

delete student2.address

// student2.pincode = 565656

console.log(student2.state)
console.log(student2)

console.log(student2.pincode.pincode1, student2.pincode.pincode2)