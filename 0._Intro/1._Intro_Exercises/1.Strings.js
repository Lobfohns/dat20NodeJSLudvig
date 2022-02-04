// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const numbersAdded = (parseFloat(numberOne) + parseFloat(numberTwo));
console.log(numbersAdded);

// --------------------------------------


// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";
console.log(numbersAdded.toFixed(2));

// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const numbersAvg = (one + two + three) / 3;
console.log(numbersAvg.toFixed(5)); 



// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"

const c = letters.charAt(2);
console.log(c);



// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const j = "j";
const newJ = "J";
const capitalizedJ = fact.replace(j, newJ);
console.log(capitalizedJ);


// --------------------------------------



