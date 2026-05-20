// Q. use a while loop to sum the number from 1 to 10 in js


let sum = 0;
let i = 1;

while (i <= 10) {
  sum += i;
  i++;
}

console.log(sum); // 55 This loop starts at 1, keeps adding each number to sum, and stops after 10





// Countdown approach
let sum = 0;
let num = 10;

while (num > 0) {
  sum += num;
  num--;
}
console.log(sum); // 55




// Infinite loop with break
 let sum = 0;
let i = 1;

while (true) {
  sum += i;

  if (i === 10) {
    break;
  }
  i++;
}
console.log(sum); // 55




// Using an array inside while
let numbers = [1,2,3,4,5,6,7,8,9,10];
let i = 0;
let sum = 0;

while (i < numbers.length) {
  sum += numbers[i];
  i++;
}
console.log(sum); // 55




// Nested logic style
let sum = 0;
let i = 1;

while (i <= 10) {
  let current = i;
  sum = sum + current;
  i = i + 1;
}

console.log(sum); // 55


// sum = sum + current

// This line means is
// 1. Take the current value of sum
// 2. Add current to it
// 3. Store the result back into sum

// Example:
let sum = 5;
let current = 3;

sum = sum + current;

console.log(sum); // 8

// It’s the same as writing:
// sum += current;
// Both do exactly the same thing.