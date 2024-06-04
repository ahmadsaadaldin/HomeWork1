c0o; /*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
function tellFortune(childNum, partner, location, job) {
  console.log(
    `you will be ${job} in ${location}, and married to ${partner} with ${childNum} kids`
  );
}

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(pupAge) {
  var human = pupAge * 7;
  console.log(`your doggie is ${human} years old in dogs years!`);
}

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply(age, amount) {
  const maxAge = 100;
  var ageLeft = maxAge - age;
  var days = ageLeft * 365;
  var end = days * amount;
  console.log(
    `you will need ${end} cups of tea to last until the ripe old age of 100`
  );
}

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function greet(name) {
  console.log(`hello ${name}`);
}

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}
x is not modified

function double(7) {
  return 2 * 7;
}
cant put a number in function 
function double('7') {
  return 2 * 'x';
}
cant put a string in function

*/

/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}


functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/
function double1(x) {
  return 2 * x;
}
function double2(x) {
  return 2 * x;
}
function double3(x) {
  return 2 * x;
}

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(number) {
  var cubic = number ** 3;
  console.log(cubic);
}

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(num1, num2) {
  var mul = num1 * num2;
  console.log(mul);
}
/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense(age) {
  var yearsLeft = 20 - age;
  if (age >= 20) {
    console.log("yes you can drive");
  } else {
    console.log(`please come back after ${yearsLeft} to get one`);
  }
}
/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
function sameLength(string1, string2) {
  if (string1.length == string2.length) {
    console.log("True");
  } else {
    console.log("False");
  }
}
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer(number1, number2) {
  if (number1 > number2) {
    console.log(number1);
  } else if (number1 == number2) {
    console.log("equal");
  } else {
    console.log(number2);
  }
}
/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer(number1, number2, number3) {
  if (number1 > number2 && number3 > number2) {
    console.log(number2);
  } else if (number2 > number1 && number3 > number1) {
    console.log(number1);
  } else {
    console.log(number3);
  }
}
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterString(str1, str2, str3, str4, str5) {
  var length1 = str1.length;
  var length2 = str2.length;
  var length3 = str3.length;
  var length4 = str4.length;
  var length5 = str5.length;
  var smallest = Math.min(length1, length2, length3, length4, length5);

  if (smallest === length1) {
    console.log(str1);
  } else if (smallest === length2) {
    console.log(str2);
  } else if (smallest === length3) {
    console.log(str3);
  } else if (smallest === length4) {
    console.log(str4);
  } else {
    console.log(str5);
  }
}
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function longerString(str1, str2, str3, str4) {
  var length1 = str1.length;
  var length2 = str2.length;
  var length3 = str3.length;
  var length4 = str4.length;
  var largest = Math.max(length1, length2, length3, length4);

  if (largest === length1) {
    console.log(str1);
  } else if (largest === length2) {
    console.log(str2);
  } else if (largest === length3) {
    console.log(str3);
  } else {
    console.log(str4);
  }
}
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(number) {
  if (number % 2 == 0) {
    console.log("true");
  } else {
    console.log("flase");
  }
}
/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(number) {
  if (number % 2 == 1) {
    console.log("true");
  } else {
    console.log("flase");
  }
}
/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(number) {
  if (number >= 0) {
    console.log(number);
  } else {
    console.log(number * -1);
  }
}
/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(fname, lname) {
  var togther = fname.concat(" ", lname);
  console.log(togther);
}
/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function average(num1, num2, num3, num4, num5) {
  var avg = (num1 + num2 + num3 + num4 + num5) / 5;
  console.log(avg);
}
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber() {
  var number = Math.random();
  console.log(number);
}
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomBetweenNumbers(num1, num2) {
  var randnum = Math.random() * (num1 - num2) + num2;
  console.log(randnum);
}
/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversty(score) {
  if ((score <= 100) & (score >= 95)) {
    console.log("A");
  } else if ((score <= 94) & (score >= 85)) {
    console.log("B");
  } else if ((score <= 84) & (score >= 70)) {
    console.log("C");
  } else if ((score <= 69) & (score >= 50)) {
    console.log("D");
  } else {
    console.log("F");
  }
}
/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
var number = 0;
function counter() {
  console.log(number);
  number++;
}
/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
function resetCounter() {
  number = 0;
}
