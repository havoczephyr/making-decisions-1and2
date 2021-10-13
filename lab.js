////////// PROBLEM 1 //////////
/*
  Create a variable called 'lovesCode' and set it equal to true. 
  Check to see if 'lovesCode' is equal to true or false. 
  If it is true, console log "I love to code!"
  If it is not, console log "Coding has its challenges."
*/

//CODE HERE
console.log ("---Problem 1---");
var lovesCode = true;

if (lovesCode = true) {
  console.log ("I love to code!");
} else {
  console.log ("Coding has its challenges :|");
}

// For problems 2-3 use the following lines of code:
var amysAge = 29
var brittanisAge = 34
var amysBirthYear = 1991
var brittanisBirthYear = 1986

////////// PROBLEM 2 //////////
console.log ("---Problem 2---");
/*
  Using an if statement and a comparison operator, create code that will check if Amy or Brittani is older, and then console.log '{name} is older'. Hint: Consider what will happen if they are the same age. Handle this situation.
*/

//CODE HERE
if (amysAge > brittanisAge) {
  console.log ("Amy is older then Brittani");
} else if (amysAge < brittanisAge) {
  console.log ("Brittani is older then Amy");
} else {
  console.log ("Amy and Brittani are the same age");
}

////////// PROBLEM 3 //////////
console.log ("---Problem 3---");
/*
  Using an if statement and a comparison operator, create code that will check if Amy and Brittani were born in the same year. If they were, console.log 'Amy & Brittani were born in the same year'. If they were not, console.log 'Amy & Brittani were not born in the same year'
*/

//CODE HERE
if (amysBirthYear == brittanisBirthYear) {
  console.log ("Brittani & Amy are born on the same year");
} else {
  console.log ("Brittani & Amy are not born on the same year");
}


////////// PROBLEM 4 //////////
console.log ("---Problem 4---");
let temperature = 55
let rain = true

/*
  Using an if statement and a comparison operator, create code that will log a suggestion on what type of clothes one should wear for the day, based on the above temperature and rain.
  If it is 80 degrees or above, and raining, one should wear a t-shirt and take an umbrella. If it is between 60 and 80 degrees, and raining, one should wear a rain-jacket. If it is 60 degrees or below, one should wear a jacket and carry an umbrella. Come up with your own clothing suggestions based on those temperature parameters when it is not raining.
*/

//CODE HERE
if (temperature <= 60 && rain) {
  console.log ("It's raining and it's cold outside, get out the Jacket & Umbrella.");
} else if (temperature > 60 && temperature < 80 && rain) {
  console.log ("it's a bit warm out there, but it's raining, get out that raincoat =]");
} else if (temperature >= 80 && rain) {
  console.log ("It's hot out, but theres a spot of rain, a T-Shirt & Umbrella should be fine!");
} 

else if (temperature <= 60) {
  console.log ("It's gonna be cold out there, bring a nice coat!");
} else if (temperature > 60 && temperature < 80) {
  console.log ("Its a bit warm, a T-shirt's fine!");
} else if (temperature >= 80) {
  console.log ("Gah, it's hot out there! Just stay home next to the AC and play Mario Kart");
}


////////// PROBLEM 5 //////////
/*
  Create a for-loop that runs 10 times, and on each iteration logs the word 'hello'.
*/

//CODE HERE
console.log ("---Problem 5---");
for (let i = 0; i < 10; i++) {
  console.log(`Hello #${i+1}!`);
}


////////// PROBLEM 6 //////////

/*
  Create a for-loop that runs 10 times, logging the numbers 1 through 10. Ex, on the first iteration it would log 1, on the second iteration it would log 2.
*/

//CODE HERE
console.log ("---Problem 6---");
for (let i = 0; i < 10; i++) {
  console.log(`${i+1}!`);
}
console.log ("I love counting! bwahahaha!")
////////// PROBLEM 7 //////////

/*
  Create a for-loop that logs the numbers 0 through 10 backwards. Ex, on the first iteration it would log 10, on the second iteration it would log 9.
*/

//CODE HERE

console.log ("---Problem 7---");
for (let i = 10; i > -1; i--) {
  console.log (`${i}!`);
}



////////// PROBLEM 8 //////////
let score = 0
let passingScore = 7
/*
  Create a while-loop that logs "Your score is not high enough" while the score variable above is below passingScore. In each iteration of the loop, increase the score by one. If your code is successful, you will see your logged statement 7 times.
*/

//CODE HERE
console.log ("---Problem 8---")
while (score < passingScore) {
  console.log ("You're Score is not high enough :(")
score = score + 1;
}

////////// INTERMEDIATE PROBLEMS //////////

////////// PROBLEM 9 //////////
/*
  Create a variable called 'changeMyMind' and set it equal to true. 
  Check to see if changeMyMind is set to true or false, if it is true, change the status to false, if it is false, change the status to true.

*/

//CODE HERE
console.log ("---Problem 9---")
let changeMyMind = true

if (changeMyMind) {
  changeMyMind = false;
} else {
  changeMyMind = true;
}
console.log("Construction Complete!")
////////// PROBLEM 10 //////////
// Try to change the value of changeMyMind (irrespective of whether it is true or false) and then console.log it's new status. It should log true. Hint: use the not operator.
console.log ("---Problem 10---")
if (!changeMyMind) {
  changeMyMind = true;
  console.log("I've changed my mind")
} else {
 console.log ("I've always changed my mind")
}


////////// ADVANCED PROBLEMS //////////

////////// PROBLEM 11 //////////

let z = 5
let x = 4
// Create a while loop that continues to run while z is greater than 0. Within the while loop, log a countdown from the value of z to 1. Once you have logged the countdown, make sure you decrement z by 1. If your code is running properly, you should see: 5,4,3,2,1,4,3,2,1,3,2,1,2,1,1.

//CODE HERE
console.log ("---Problem 11---");
while (z > 0) {
  console.log (`${z}`);
  z = z - 1;
  if (z == 0) {
    z = x;
    x = x - 1;
  }
  }