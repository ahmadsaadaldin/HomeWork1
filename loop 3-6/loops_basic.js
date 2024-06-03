// 1- Write a program that prints numbers from 1 to 10 using a for loop.
for (i = 1; i <= 10; i++) {
  console.log(i);
}

// 2-Write a program that prints the even numbers from 1 to 10 using a for loop.
for (i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// 3- Write a program that prints the odd numbers from 1 to 10 using a while loop.
for (i = 1; i <= 10; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

// 4- Write a program that prints the multiplication table of a number entered by the user using a for loop.
var x = prompt("enter number");
for (i = 0; i <= 12; i++) {
  console.log(i * x);
}

// 5- Write a program that calculates the sum of numbers from 1 to 100 using a while loop.
var x = 1;
var sum = 0;
while (x <= 100) {
  sum += x;
  x++;
}
console.log(sum);
// 6- Write a program that calculates the factorial of a number entered by the user using a for loop.
var number = prompt("enter number");
var fac = 1;
for (i = number; i > 0; i--) {
  fac *= number;
  number--;
}
console.log(fac);
// 7- Write a program that prints the Fibonacci series up to a certain number entered by the user using a while loop.
var limit = prompt("Enter the limit number");
var a = 0, b = 1, nextTerm;
nextTerm = a + b;
while (nextTerm <= limit) {
    console.log(nextTerm);
    a = b;
    b = nextTerm;
    nextTerm = a + b;
}

// 8- Write a program that prints the reverse of the following numbers:
//5 , 10 , 15 , 20
// using a while loop.
var i=20;
while(i>0){
    console.log(i)
    i-=5
}
