// 1- Write a program to declare two numbers. If both numbers are greater than 10,
//print "Both numbers are greater than 10". Otherwise, print "At least one number is not greater than 10".
var x = 4;
var y = 9;
if ((x > 10) & (y > 10)) {
  console.log("Both numbers are greater than 10");
} else {
  console.log("At least one number is not greater than 10");
}

// 2- Write a program to declare a username and a password.
//If both the username and password are correct, print "Access granted". Otherwise, print "Access denied".
var username = prompt("enter name");
var password = prompt("enter password");
if (username === "ahmad" && password === "123") {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// 3- Write a program to declare a number. If the number is between 10 and 20 (inclusive), print "The number is between 10 and 20".
// Otherwise, print "The number is not between 10 and 20".
var num = prompt("enter number between 9 and 21 ");
if (num < 9 || num > 20) {
  console.log("The number is not between 10 and 20");
} else {
  console.log("The number is between 10 and 20");
}

// 4- Write a program that to declare age and whether they have a driver's license (yes or no).
//If the user is 18 or older and has a driver's license, print "You can drive". Otherwise, print "You cannot drive".
var age = prompt("eneter age");
var liscense = prompt("do you have liscense?");
if (age >= 18 && liscense === "yes") {
  console.log("you can drive");
} else {
  console.log("you cant drive");
}
// 5- Write a program to declare a number.
//If the number is greater than 10 or less than 0, print "Invalid number". Otherwise, print "Valid number".
var number1 = prompt("pick a number between 0 and 10");
if (number1 > 10 || number1 < 0) {
  console.log("invalid number");
} else {
  console.log("Valid number");
}
// 6- Write a programto declare a number.
//If the number is between 5 and 10 (inclusive) or between 20 and 25 (inclusive), print "The number is valid".
//Otherwise, print "The number is not valid".
var number2 = prompt("enter number");
if ((number2 >= 5 && number2 <= 10) || (number2 >= 20 && number2 <= 25)) {
  console.log("number is valid");
} else {
  console.log("number is not valid");
}
// 7- to declare a password. If the password is "secret" or "password", print "Access granted".
//Otherwise, print "Access denied".
var pass = prompt("enter password");
if (pass === "secret" || pass === "password") {
  console.log("Access granted");
} else {
  console.log("Access denied");
}
// 8- Write a program to declare a number. If the number is between 0 and 100 (inclusive) and is even,
//print "The number is even and between 0 and 100". Otherwise, print "The number is not even and/or not between 0 and 100".
var number3 = prompt("enter number between 0 and 100");
if (number3 >= 0 && number3 <= 100 && number3 % 2 == 0) {
  console.log("The number is even and between 0 and 100");
} else if (number3 >= 0 && number3 <= 100 && number3 % 2 !== 0) {
  console.log("The number is odd and between 0 and 100");
} else {
  console.log("The number is not even and/or not between 0 and 100");
}
// 9- Write a program to declare two numbers. If either number is negative, print "At least one number is negative".
//Otherwise, print "Both numbers are positive".
var num1 = prompt("enter first number");
var num2 = prompt("enter second number");
if (num1 < 0 || num2 < 0) {
  console.log("At least one number is negative");
} else {
  console.log("both numbers are positive");
}
// 10- Write a program to declare age and whether they are a student (yes or no).
//If the user is under 18 or is a student, print "You qualify for a discount". Otherwise, print "You do not qualify for a discount".
var age1 = prompt("enter age");
var student = prompt("student? yes/no");
if (age1 < 18 && student === "yes") {
  console.log("You qualify for a discount");
} else {
  console.log("You do not qualify for a discount");
}
