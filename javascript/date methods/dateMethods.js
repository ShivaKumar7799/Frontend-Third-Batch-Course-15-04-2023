const currentDate = new Date();

// getTime will give the time in milli seconds from 1970 jan 1
console.log(currentDate.getTime(),"milli seconds")

console.log(currentDate.getFullYear());
console.log(currentDate.getMonth())  // giving ouput in index value from 0, 0 - jan, 11 - dec;
console.log(currentDate.getDate());
console.log(currentDate.getDay()); // giving output in index value from 0 to 6,  0 - means sunday, 6 - saturday
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());
console.log(currentDate.getMilliseconds());

console.log(currentDate.toTimeString());

const expiryDate = new Date();
console.log(expiryDate.setDate(27))
console.log(expiryDate.toString());