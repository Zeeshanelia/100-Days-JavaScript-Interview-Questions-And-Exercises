// Q : Create a function that takes a number and returns its factorial
//Factorial Formula: n!=n×(n−1)×(n−2)×⋯×1

function factorial(num) {

  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;

}

console.log(factorial(5)); // 120




// Q: Write a function that accepts a string and returns its reverse
// Method 1: Using a Loop

function reverseString(str) {

  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

console.log(reverseString("JavaScript"));// tpircSavaJ



// Method 2: Using Built-in Methods
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Hello"));// olleH



// Q : Create a function to find the largest number in an array

// Using a Loop
function findLargest(arr) {

  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {

    if (arr[i] > largest) {
      largest = arr[i];
    }

  }

  return largest;
}

console.log(findLargest([10, 5, 30, 15, 25]));// 30


// Q :  Kebab-case means all lowercase letters with words separated by hyphens.

function toKebabCase(str) {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-');
}

console.log(toKebabCase("Hello World")); // "hello-world"
