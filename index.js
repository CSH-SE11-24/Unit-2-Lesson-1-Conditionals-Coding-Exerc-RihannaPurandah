// Exercise 1: Age Checker
// Ask the user to enter their age. If they are 18 or older, display "You are an adult." Otherwise, display "You are not an adult."
let age = prompt("Enter your age: ")

if(age >= 18){
  console.log("You are an adult.")
}else{
  console.log("You are not an adult.")
}

// Exercise 2: Simple Comparison
// Write a program that prompts the user to enter two numbers and displays whether the first number is greater, less than, or equal to the second number.
// Note: make sure you have the correct types!
let num1 = prompt("Pick a number: ")
let num2 = prompt("Pick another number: ")

if(num1 > num2){
  console.log("num1 is greater than num2")
}else if(num1 < num2){
  console.log("num1 is less than num2")
}else if(num1 == num2){
  console.log("num1 is equal to num2")
}else {
  console.log("Error. Something is wrong")
}
// Exercise 3: Even or Odd
// Create a program that asks the user for an integer and then prints whether the number is even or odd. (Google how to check this!)
let int = prompt("Enter a number/integer: ")

if(int % 2 == 0){
  console.log("The integer is even")
}else {
  console.log("The integer is odd")
}

// Exercise 4: Day of the Week
// Prompt the user to enter a day of the week (e.g., "Monday"). Display a message that says whether it's a weekday or the weekend.
let week = prompt("Enter a day of the Week: ")

if(week == "Monday","Tuesday","Wednesday","Thursday","Friday"){
  console.log("Its a weekday")
}else if(week == "Sunday", "Saturday "){
  console.log("Its a weedend")
}

// Exercise 5: Age Group Classifier
// Prompt the user to enter their age and categorize them into different age groups:
// - 0-12: Child
// - 13-19: Teenager
// - 20-64: Adult
// - 65+: Senior Citizen
let ages = prompt("Enter your age: ")

if(ages % 0 == 12){
  console.log("child")
}else if (ages % 13 == 19){
  console.log("Teenager")
}else if(ages % 20 == 64){
  console.log("Adult")
}else if(ages == 65){
  console.log("Senior Citizen")
}




// Exercise 6: Rock, Paper, Scissors Game
// Create a simple rock, paper, scissors game. Prompt the user to enter their choice (rock, paper, or scissors) and then randomly generate the computer's choice. Determine the winner and display the result.





