/*
Create a function using recursion called numToText which takes a
string and returns a new string with all numeric numbers from the
input string converted to their corresponding text words. You can
assume that the numbers in the string are single digit nubmers.
Can you implement this function in two different ways?
One way involves creating an inner helper function (or subroutine),
the other way does not use an inner function.

Extra Credit: Have the function handle numbers of any digit size.

Ex: numToText("I have 5 dogs and 6 ponies"); // returns "I have five dogs and six ponies"

*/

var numToText = function(str) {
  var result = "";

  var codeObj = {
  	0:"zero",
  	1:"one",
  	2:"two",
  	3:"three",
  	4:"four",
  	5:"five",
  	6:"six",
  	7:"seven",
  	8:"eight",
  	9:"nine"
  }

  var innerfunction = function(string) {
  	if(string.length === 0) {
  		return result;
  	} else {
  		var currentChar = string.charAt(0);
  		if(codeObj.hasOwnProperty(currentChar)){
  			result += codeObj[currentChar];
  		} else {
  			result += currentChar;
  		}
  	return innerfunction(string.slice(1));
  	}
  };

  innerfunction(str);
  return result;

};

numToText("I have 5 dogs and 6 ponies");