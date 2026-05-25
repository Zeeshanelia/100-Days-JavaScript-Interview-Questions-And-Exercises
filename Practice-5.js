// Q: create for loop that calculate Factorial of 5


let factorial = 1;

for (let i = 1; i <= 5; i++) {
  factorial *= i;
}
console.log("Factorial of 5 is:", factorial); //Factorial of 5 is: 120


// Factorial means multiplying a number by all positive numbers before it.
// 5! = 5 × 4 × 3 × 2 × 1 = 120

// Loop Working
// 1 × 1 = 1
// 1 × 2 = 2
// 2 × 3 = 6
// 6 × 4 = 24
// 24 × 5 = 120




// create for loop that reverse an array = [ 1,2,3,4,5,7,9]
const arr = [1, 2, 3, 4, 5, 7, 9];

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}





// Store Reversed Array

const arr = [1, 2, 3, 4, 5, 7, 9];
const reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
  reversed.push(arr[i]);
}

console.log(reversed); // [9, 7, 5, 4, 3, 2, 1]

arr.length = 7
// Last index:
// 7 - 1 = 6

// Loop starts from index 6 and moves backward:
// Index: 6 → 5 → 4 → 3 → 2 → 1 → 0
// Value: 9 → 7 → 5 → 4 → 3 → 2 → 1



// create while loop that log number from 1 to 100 divisible 5

let i = 1;

while (i <= 100) {

  if (i % 5 === 0) {
    console.log(i);
  }

  i++;
}



// Optimized Way

let i = 5;

while (i <= 100) {
  console.log(i);
  i += 5;
}

// Why Better?
// No if condition needed
// Faster
// Cleaner code
// Directly jumps to numbers divisible by 5

// 5
// 10
// 15
// 20
// 25
// ...
// 100

