/*
 * Exercise 4: Array methods.
 */

 /*
 * PART 1:
 *
 * Ready for a challenge? Your goal is to take the array of objects below and return only those where
 * the first name of the customer starts with 'A'. The resultant array must also be sorted alphabetically
 * by first name, and you *cannot* use traditional for loops to accomplish this (Array methods only)!
 *
 * Good luck!
 *
 * HINT: There are two built-in Array.prototype methods you can easily chain to accomplish
 * this. If you looked at the link in the exercise I posted on the Bitbucket exercises
 * repo last week, you'll have a huge head start. Note that each of these methods takes
 * a function, with the first having a single parameter and the second having two:
 *
 * var new_array = array.firstmethod(function(input_1){
 *  return input_1.first.includes('A');
 * }).secondmethod(function(input_1, input_2){
 *  return (input_1 > input_2) ? input_1 : input_2;
 * });
 *
 */

 var customers = [{first: 'Tilda',last: 'Swinton', balance: 0},
                  {first:'Benedict', last:'Cumberbatch', balance: 0},
                  {first: 'Martin', last:'Freeman', balance: 0},
                  {first: 'Morgan', last: 'Freeman', balance: 0},
                  {first: 'Ada', last: 'Lovelace', balance: 0},
                  {first: 'Arnold', last: 'Palmer', balance: 0},
                  {first: 'David', last: 'Rubidovitch', balance: 0},
                  {first: 'Adam', last: 'Driver', balance: 0},
                  {first: 'Leo', last: 'Tolstoy', balance: 0},
                  {first: 'Zayn', last: 'Malik', balance: 0},
                  {first: 'Haruki', last: 'Murakami', balance: 0},
                  {first: 'Daniel', last: 'Craig', balance: 0},
                  {first: 'Maiya', last: 'Angelou', balance: 0},
                  {first: 'Andy', last: 'Warhol', balance: 0},
                  {first: 'Richard', last: 'Nixon', balance: 0},
                  {first: 'Stephen', last: 'Fry', balance: 0},
                  {first: 'Sterling', last: 'Archer', balance: 0},
                  {first: 'Bob', last: 'Seger', balance: 0},
                  {first: 'Jimmy', last: 'Buffet', balance: 0},
                  {first: 'Aoi', last: 'Yukanami', balance: 0}];


var new_array = customers.filter(function(customer) {
   return customer.first[0] === 'A';
// sorts customers alphabetically by first name
}).sort(function(a, b) {
   return (a.first > b.first);
});

console.log("Our sorted customers alphbetically by first name: ", new_array);

// js mdn (sort) - use for googling anything

// Un-comment this when you're ready to check.
//console.log("Our filtered and sorted array is:",a_customers);




/*
 * PART 2:
 *
 * Nice work! Now that we have our reduced array, lets put in some balances! Again, without
 * using a traditional for loop (and using built-in array methods), for each customer
 * in our reduced array, set their balance to:
 *
 *   Math.random() * 1000 + 50;
 *
 * Good luck!
 */



// Un-comment this when you're ready to check.
//console.log("Our customer array w/ balances is:", a_customers);




/*
 * PART 3:
 *
 * Last concept! Now that we have some balances, let's say that we want a new
 * array that is ONLY made up of these balances. Without using either of the
 * methods we used above, add each customer's balance from our reduced customer
 * array to a new
 */



// Un-comment this when you're ready to check.
 //console.log("Our array of balances is:",balances_array);
