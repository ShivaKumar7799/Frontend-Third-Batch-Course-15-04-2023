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



