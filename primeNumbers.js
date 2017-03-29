var array = [1,2,3,4,5];

// algorithm to find all primes
function primeSieve(n) {
   var array = [], upperLimit = Math.sqrt(n), output = [];

  //makes an array from 2 to (n-1)
   for (var i = 0; i < n; i++){
     array.push(true);
   }

  //removes multiples of primes starting from 2,3,5
   for (var i = 2; i <= upperLimit; i++){
     if (array[i]) {
       for (var j = i * i; j < n; j += i) {
         array[j] = false;
       }
     }
   }

  //all array[i]set to true are primes for(var i = 2; i < n; i++){
   for (var i = 2; i < n; i++){
     if (array[i]){
      output.push(i);
      }
    }
  return output;
};

console.log(primeSieve(100));
