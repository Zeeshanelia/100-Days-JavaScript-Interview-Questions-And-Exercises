// Q: Write a function to check if a number is even or odd

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkEvenOdd(4)); //Even
console.log(checkEvenOdd(7)); //Odd


// Q: Create a function to calculate the area of a circle.     A = \pi r^2

function circleArea(radius) {
  return Math.PI * radius * radius;
}

console.log(circleArea(5)); // 78.53981633974483



// Q: Write a function that accepts an array and returns the sum of its elements

function arraySum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(arraySum([1, 2, 3, 4])); // 10






// Q:   Create a function that checks if a string starts with a specific character

function startsWithChar(str, char) {
  return str.startsWith(char);
}

console.log(startsWithChar("JavaScript", "J"));  //true
console.log(startsWithChar("Hello", "A")); //false






// Q: Write a function to find the maximum of two numbers
function findMax(a, b) {

  if (a > b) {
    return a;
  } else {
    return b;
  }

}

console.log(findMax(10, 25)); // 25







// Q:






// Q:





