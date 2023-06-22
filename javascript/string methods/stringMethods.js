let carName = "maruthi suziki asdfsaf";

console.log(typeof carName)

// length 

console.log(carName.length, "length of the string");

// slice 
// taking some part of the string 

let technology = "Express js"
console.log(technology.length)
console.log(technology.slice(0,7))
console.log(technology.slice(8,technology.length))

console.log(carName.slice(0,7))
console.log(carName.slice(8,14))

// replace method 

let storyLine = "Ramu is a good boy. Ramu study well";

console.log(storyLine.replace("Ramu", "Ravi"))

// replaceAll 

console.log(storyLine.replaceAll("Ramu", "Shyam"))

// upperCase 

let favouriteFood = "Chicken Biryani";
console.log(favouriteFood.toUpperCase())


// lowercase 

let favouriteDish = "Pulihora";
console.log(favouriteDish.toLowerCase())

// trim method will remove spaces in starting and ending 

let userName = "        shivakumar7799                     ";
console.log(userName.length, userName, "username length")
console.log(userName.trim(), userName.trim().length)

// char method 

let favouritePet = "cat";
console.log(favouritePet.charAt(0))
console.log(favouritePet.charAt(1))
console.log(favouritePet.charAt(2))

// split method - will convert strings to array;

let fruits = "mango apple banana"
console.log(fruits.split(" "));


// includes 

console.log(fruits.includes("papaya"), "fruit availble")

let fruitFirstName = "pine";
let fruitLastName = "apple";

// string concatenation 

let fruitFullName = "my favourite fruit is" + " " + fruitFirstName + " " + fruitLastName;
console.log(fruitFullName) 

// concatenation method 

let fruitName = "my favourite fruit is" + " " +  fruitFirstName.concat(" ", fruitLastName);
console.log(fruitName)

// string literals 

let seasonFruit = `my favourite fruit is ${fruitFirstName} ${fruitLastName}`;
console.log(seasonFruit)

let avaialbeSeason = `${fruitFirstName} ${fruitLastName} is available in summer`
console.log(avaialbeSeason)

let tech = "javascript";
let techYear = 1995;
console.log(`${tech} is introuduced in ${techYear}`)