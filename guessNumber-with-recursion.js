// prompt user for a number between 1 and 10 and use recursion
// to keep prompting until the user number is given number to function

var guessNumber = function(number) {
	var guess = prompt("enter a number between 1 and 10");
	var guessNum = +guess;
  if(guessNum === number) {
    console.log("You got it!");
    return;
  }
  
  guessNumber(number);

};

//guessNumber(5);