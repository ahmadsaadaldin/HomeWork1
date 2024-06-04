var arr = [1, 43, 5, 64, 12, 20];
// 1-Write a function to find the largest element in an array.
function largestNum() {
  var largest = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  console.log(largest);
}
// 2-Write a function to find the smallest element in an array.

function smallestNum() {
  var smallest = arr[0];
  for (i = 0; i <= arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  console.log(smallest);
}
// 3-Write a function to find the sum of all elements in an array.
function add() {
  counter = 0;
  for (i = 0; i <= arr.length; i++) {
    counter += arr[i];
  }
  console.log(counter);
}
// 4-Write a function to find the average of all elements in an array.
function average() {
  var add = arr[0];
  for (i = 0; i < arr.length; i++) {
    add += arr[i];
    i++;
  }
  var avg = add / arr.length;
  console.log(avg);
}
// 5-Write a function to find the median of all elements in an array.
function median() {
  if (arr.length % 2 == 1) {
    var mid = arr.length / 2;
    console.log(arr[mid]);
  } else {
    var left = arr.length / 2 - 1;
    var right = arr.length / 2;
    var evenmid = (arr[left] + arr[right]) / 2;
    console.log(evenmid);
  }
}
// 6-Write a function to remove all duplicates from an array.
function duplicates(array) {
  newarr = [];
  for (i = 0; i < arr.length; i++) {
    var dup = false;
    for (x = 0; x < newarr.length; x++) {
      if (arr[i] == newarr[x]) {
        dup = true;
        break;
      }
    }
    if (!dup) {
      newarr.push(arr[i]);
    }
  }
  console.log(newarr);
}
// 7-Write a function to sort an array in ascending order.
function ascending(arr) {
  for (i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
// 8-Write a function to sort an array in descending order.
function descending(arr) {
  for (i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
// 9-Write a function to shuffle the elements of an array randomly.
function shuffleArray(arr) {
  const n = arr.length;

  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}
