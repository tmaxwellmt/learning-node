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

var array = []

for(i=1; i<=20; i++){
    array.push(i)
}
var even = function (num) {
  return num % 2 === 0;
};
var myEvenArrray = array.filter(even);

console.log("Here is our starting array: ", array);
console.log("Here is our even array: ", array);
