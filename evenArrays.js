/*
 * Exercise 1: Filtering Data
 *
 * The goal of this exericse is to take the below array
 * and without using traditional for loops (i.e. for(i=0; i<n; i++) or for(i in array))
 * use one of two built-in javascript methods that arrays have available to them to
 * filter out all even numbers in the array.
 *
 * HINT: Seach this page for the appropriate methods!
 *
 * https://colintoh.com/blog/5-array-methods-that-you-should-use-today
 */

var array = [];

for(i=1; i<=20; i++){
    array.push(i)
}
//checks for numbers in the array that are even
//allways want a function with aurgument when using .filter
array = array.filter(function(elm) {
  return elm % 2 != 0; // puts elm back in the array in true
});

 //same as above but check for numbers in the array divisible by 3
array = array.filter(function(oak) {
  return oak % 3 != 0;
});

var sum = 0;
// add 1 new thing to each element in the new array.
array.forEach(function(elm) { // forEach returns nothing
  sum += elm;
});

var newArray = [];

newArray = array.map(function(oak) {
  return "Here is your number" + oak;
});

console.log("Array is now: ", sum);
console.log("Here is our filtered even numbers in an array: ", newArray);

// var array = [];
//
// for(i=1; i<=20; i++){
//     array.push(i)
// }
// var even = function (num) {
//   return num % 2 === 0;
// };
//
// var myEvenArrray = array.filter(even);
//
// console.log("Here is our starting array: ", array);
// console.log("Here is our even array: ", array);
