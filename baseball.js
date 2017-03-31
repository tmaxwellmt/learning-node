const bballPlayers = [
   { first: 'Carlos', last: 'Beltran', homeruns: 421, retired: false },
   { first: 'Ken', last: 'Griffey Jr', homeruns: 630, retired: true },
   { first: 'Hank', last: 'Aaron', homeruns: 755, retired: true },
   { first: 'Ediwn', last: 'Encarnacion', homeruns: 310, retired: false },
   { first: 'Alex', last: 'Rodriguez', homeruns: 696, retired: true },
   { first: 'Willie', last: 'Mays', homeruns: 660, retired: true },
   { first: 'Jim', last: 'Thome', homeruns: 612, retired: true },
   { first: 'Sammy', last: 'Sosa', homeruns: 609, retired: true },
   { first: 'Babe', last: 'Ruth', homeruns: 714, retired: true },
   { first: 'Albert', last: 'Pujols', homeruns: 591, retired: false },
   { first: 'Barry', last: 'Bonds', homeruns: 762, retired: true },
   { first: 'Miguel', last: 'Cabrera', homeruns: 446, retired: false },
   { first: 'Ryan', last: 'Howard', homeruns: 382, retired: false }
 ];
 // Array.prototype.filter()
 // 1. Filter the list of players who have more then 500, but less than 600 home runs
var newPlayers = bballPlayers.filter(function(maple) {
  return maple.homeruns > 400 && maple.homeruns < 600;
});

console.log("our New player is: ", newPlayers);

// Array.prototype.map()
// 2. Give us an array of the players' first name and home runs
var mappedPlayers = bballPlayers.map(function(ash) {
  var newPlayer = {first: ash.first, homeruns: ash.homeruns};
  return newPlayer;
});

console.log("Mapped array is: ", mappedPlayers);

// Array.prototype.sort()
// 3. Sort the players by homeruns, most to least
var sortedPlayers = bballPlayers.sort(function(aspen, fur) {
  return aspen.homeruns - fur.homeruns;
});

console.log("sorted players by homeruns: ", sortedPlayers);

 // Array.prototype.reduce()
 // 4. How many homeruns did all the players hit?
var reducedPlayers = bballPlayers.reduce(function(sum, player) {
  return sum + player.homeruns;
},0);

console.log("sum of homeruns: ", reducedPlayers);

 // 5. How many homeruns do the active have?
var activeRuns = bballPlayers.filter(function(player) {
  return player.retired === false;
}).reduce(function(sum,player) {
  return sum + player.homeruns;
},0);

console.log("sum of active players homeruns: ", activeRuns);

function percentage(a,b) {
  return Math.floor((a/b)* 100);
}

console.log("Pecentageof home runs hit by active players:",percentage(activeRuns, reducedPlayers)+"%");
