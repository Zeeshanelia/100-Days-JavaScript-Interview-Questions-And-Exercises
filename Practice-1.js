// VARIABLES
var firstName = "Zeeshan";
alert("First Name: " + firstName);



// NUMBER + MATH
var num1 = 5;
var num2 = 10;
var sum = num1 + num2;

alert("Sum: " + sum);

var result = num1 * num2;
alert("Multiplication: " + result);


// STRING CONCATENATION
var part1 = "Pakistan";
var part2 = " Zindabad";

alert(part1 + part2);


// PROMPT
var userName = prompt("Enter your name");
alert("Welcome " + userName);


// IF ELSE CONDITION
var city = "Karachi";

if (city === "Karachi") {
    alert("Welcome to the city of lights");
} else {
    alert("Welcome!");
}


// IF ELSE IF
var marks = parseFloat(prompt("Enter your marks:"));

if (marks >= 90) {
    alert("Grade A");
} else if (marks >= 70) {
    alert("Grade C");
} else {
    alert("Fail");
}


// ARRAY
var fruits = ["Apple", "Banana", "Mango"];

alert(fruits[1]);

fruits.push("Orange");

alert(fruits);


// FOR LOOP
for (var i = 0; i < 5; i++) {
    console.log("Number: " + i);
}


// LOOP WITH ARRAY
var pets = ["dog", "cat", "duck"];

for (var i = 0; i < pets.length; i++) {
    console.log(pets[i]);
}


// SEARCH IN ARRAY
var userNames = ["user1", "user2", "user3"];
var inputName = prompt("Enter username");

var found = false;

for (var i = 0; i < userNames.length; i++) {
    if (inputName === userNames[i]) {
        found = true;
        break;
    }
}

if (found) {
    alert("User Found");
} else {
    alert("User Not Found");
}