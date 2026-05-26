// Q:  Add two new elements to the start of an array using .unshift()


const fruits = ["Banana", "Orange"];

fruits.unshift("Apple", "Mango");

console.log(fruits); //["Apple", "Mango", "Banana", "Orange"]




// Q: Remove the last element of an array and log the updated array
const numbers = [10, 20, 30, 40];

numbers.pop();

console.log(numbers); //[10, 20, 30]


// Q:  Use .slice() to extract the first three elements of an array


const arr = [1, 2, 3, 4, 5];

const firstThree = arr.slice(0, 3);

console.log(firstThree); //[1, 2, 3]



// Q: Find the index of a specific element in an array using .indexOf()
const colors = ["Red", "Blue", "Green"];

const index = colors.indexOf("Blue");

console.log(index);// 1



// Q:  Sort Numbers (Ascending)
const numbers = [40, 10, 100, 5, 25];

numbers.sort((a, b) => a - b);

console.log(numbers); // [5, 10, 25, 40, 100]
// a - b       Negative → a comes first
// Positive → b comes first


// Q: Sort Numbers (Descending)
const numbers = [40, 10, 100, 5, 25];

numbers.sort((a, b) => b - a);

console.log(numbers); //[100, 40, 25, 10, 5]


// Q: Sort Array of Objects
const users = [
  { name: "Ali", age: 22 },
  { name: "Ahmed", age: 18 },
  { name: "Zeeshan", age: 25 }
];

users.sort((a, b) => a.age - b.age);

console.log(users);

// [
//   { name: "Ahmed", age: 18 },
//   { name: "Ali", age: 22 },
//   { name: "Zeeshan", age: 25 }
// ]



// write a program, that's create copy of array without mutating original

const originalArray = [1, 2, 3, 4];

const copiedArray = [...originalArray];

console.log("Original:", originalArray);  //Original: [1, 2, 3, 4]

console.log("Copy:", copiedArray);  //Copy: [1, 2, 3, 4]


// Important Interview Point
// This does NOT create a copy:

const arr1 = [1, 2, 3];

const arr2 = arr1;

// Because both variables point to the same array in memory.
// So changing one changes both.

const copy = [...originalArray];