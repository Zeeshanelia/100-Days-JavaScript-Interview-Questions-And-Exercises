//Q: Create a for...of loop to log each character of the string in js.


// Note : for of loop apply on string

const name = "Zeeshan";
for (const char of name) {
  console.log(char);
}

// Z
// e
// e
// s
// h
// a
// n



const text = "Hello";

let count = 0;

for (const char of text) {
  count++;
}

console.log("Total Characters:", count); // Total Characters: 5




const emojis = "😀🔥🚀";

for (const emoji of emojis) {
  console.log(emoji);
}

// 😀
// 🔥
// 🚀




//Sum Array Values

const numbers = [10, 20, 30];
let sum = 0;

for (const num of numbers) {
  sum += num;
}

console.log(sum); //60

// ----------------------- //


// Q: writw for loop that skip even numbers between 1 and 20

for (let i = 1; i <= 20; i++) {

  // Skip even numbers
  if (i % 2 === 0) {
    continue;
  }

  console.log(i);
}

// i % 2 === 0
// → checks if number is even.
// continue
// → skips the current loop iteration.
// So only odd numbers are printed.





for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}

// How it works               let i = 1
// → loop starts from 1       i <= 20
// → loop runs until 20       i += 2
// → increases by 2 each time: