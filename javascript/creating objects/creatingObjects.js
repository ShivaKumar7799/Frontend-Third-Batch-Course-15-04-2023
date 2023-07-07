// literals

const virat = {}
virat.name = "virat kohli"
console.log(virat instanceof Object && !Array.isArray(virat), typeof virat , virat);

// new keyword

const sachin = new Object;
sachin.name = "sachin tendulkar"
console.log(typeof sachin, sachin );

// copying directly

const yuvraj = sachin;
yuvraj.name = "yuvraj singh"
console.log(typeof yuvraj, yuvraj, sachin)

// assign method

const dhoni = Object.assign({}, virat);
dhoni.name ="mahindra singh dhoni"
console.log(typeof dhoni, dhoni, virat)

// construction function - it will helps us to create objects

function Employee(id, name, rollNo){
    this.id = id;
    this.name = name;
    this.rollNo = rollNo;
}

const employee1 = new Employee(25, "raj", 12)
const employee2 = new Employee(23, "ramesh", 13)

console.log(employee1, employee2)

const emp1 = {
    id : 25,
    name : "raj",
    rollNo : 12
}

const emp2 = {
    id : 23,
    name : "ramesh",
    rollNo : 13
}

// copying using assignment operator or copying directly

const hema = {
    name : "hema",
    age : 23,
    height : 5.6,
    city : "Visakhapatnam",
    bloodGroup : "A+"
}

// const hyma = hema;  // shallow copy - referencs same copy - (shadow)
// hyma.name = "hyma"
// hyma.bloodGroup = "O -ve"
// console.log(hema, hyma)

// spread operator 

const hyma = {...hema}  // deep copy - creates new copy
hyma.name = "hyma"
hyma.bloodGroup = "O -ve"
console.log(hema, hyma)

console.log(Object.keys(hema));
console.log(Object.values(hema));
console.log(Object.entries(hema));

console.log(hema.city);
console.log(hema["city"]);

console.log(JSON.stringify(hema), typeof JSON.stringify(hema))

const hemaData = JSON.stringify(hema);

console.log(hemaData.city, typeof hemaData);

const hemaObjData = JSON.parse(hemaData);
console.log(hemaObjData.city, typeof hemaObjData)