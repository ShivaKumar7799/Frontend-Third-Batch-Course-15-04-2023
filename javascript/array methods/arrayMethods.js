let student1Name = "Raju";
let student2Name = "Ravi";
let student3Name = "Shyam";
let student4Name = "Vinod";

let student1Result = true;
let student2Result = true;


let students = ["Raju", "Raviii", "Shyam", "Vinod"]

let studentsResult = [true,true,false,true]

console.log(student1Name, "student1Name string")

console.log(students[0], "student 1");
console.log(students[1], "student 2");
console.log(students[2]);

console.log(studentsResult[0]);
console.log(studentsResult[1]);
console.log(studentsResult[2]);

console.log(students, "before changing Raviii")

students[1] = "Ravi";
students[2] = "Murali"
students[4] = "shiva kumar"
students[10] = "Sreekant"
students[25]= "Vaishnavi"

console.log(students, "after changing ravi")
console.log(students[2])


// array methods 

console.log(students.length)
console.log(students[25])
console.log(students[students.length - 1])  // accesing last element from the array

// push method - push method helps us to add elements at the end of the array

let fruits = ["apple", "papaya", "banana"]

// fruits[3] = "grapes"

fruits.push("grapes");
fruits.push("pine apple")
fruits.push("strawberry");
fruits.push("mango");

console.log(fruits)

// pop method - pop method helps us to remove an element from the end of the array

let firstRemovedFruit = fruits.pop();
let secondRemoveFruit = fruits.pop();
fruits.pop();

console.log(firstRemovedFruit, secondRemoveFruit)

console.log(fruits)

// shift method - shift method helps us to remove an element from the starting of the array

let vegetables = ["onion", "tomoto", 'bringle']

let firstRemovedVegetable = vegetables.shift();
vegetables.shift();

console.log(firstRemovedVegetable)

console.log(vegetables)

// unshift method - unshift method helps us to add element to the starting of the array

vegetables.unshift("cauliflower")
console.log(vegetables)
vegetables.unshift("carrot");

console.log(vegetables)

// splice method - splice method will helps us to remove and add items to the middle of the array

let colors = ["red", "blue", "orange", "gray", "green"]
console.log(colors)

colors.splice(2,1, "black","pink", "white")  // starting index - deleted count - elements that you want to add

console.log(colors)


// slice method - taking some part of the array

const middleColors = colors.slice(1,6)

console.log(middleColors)

console.log(colors)

// sort method - alphabetical order

console.log(colors.sort()) // ascending order
console.log(colors.reverse())  // descending order functionality

// concatenation of array;

let vegItems = ["panner", "mushroom", "maccani"];

let nonVegItems = ["chicken", "mutton", "fish", "eggs"];

let totalItems = vegItems.concat(nonVegItems)
console.log(totalItems, Array.isArray(totalItems))

let totalItemsString = totalItems.join();
console.log(totalItemsString, typeof totalItemsString, Array.isArray(totalItemsString))


let flowers = ["lilly", "jasmine", "lotus","rose"]

let favouriteFlower = flowers.includes("hibiscus")

console.log(favouriteFlower)

console.log(flowers.sort().reverse())


var techName = "java script"

console.log(techName.split("").reverse().join().replaceAll(",",""));


const vehicles = ["car", "lorry"];
vehicles.push("bicycle")

// vehicles = ["bicycle","scooter","bike"];

console.log(vehicles)