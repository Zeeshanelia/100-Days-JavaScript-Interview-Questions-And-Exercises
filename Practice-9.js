// Q : Check if a Number is Positive or Negative

let num = -5;

if (num > 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}


// Q : Check if a Number is Even or Odd
let num = 8;

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}



// Q : Check Voting Eligibility
let age = 20;

if (age >= 18) {
  console.log("Eligible to Vote");
} else {
  console.log("Not Eligible");
}


// Q : Find the Greater of Two Numbers
let a = 10;
let b = 25;

if (a > b) {
  console.log(a);
} else {
  console.log(b);
}



// Q : Assign Grade Based on Marks
let marks = 85;

if (marks >= 90) {
  console.log("A");
} else if (marks >= 80) {
  console.log("B");
} else if (marks >= 70) {
  console.log("C");
} else {
  console.log("Fail");
}



// Q : Check if a Character is a Vowel
let char = "a";

if (
  char === "a" ||
  char === "e" ||
  char === "i" ||
  char === "o" ||
  char === "u"
) {
  console.log("Vowel");
} else {
  console.log("Consonant");
}


// Q : Check Divisibility by 5 and 3
let num = 15;

if (num % 5 === 0 && num % 3 === 0) {
  console.log("Divisible by both");
} else {
  console.log("Not divisible by both");
}


// Q : Find the Largest of Three Numbers
let a = 10;
let b = 30;
let c = 20;

if (a >= b && a >= c) {
  console.log(a);
} else if (b >= a && b >= c) {
  console.log(b);
} else {
  console.log(c);
}

