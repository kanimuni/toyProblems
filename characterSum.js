// Given a string of arbitrary size, convert each character 
// into its integer equivalent and sum the entirety.

// Examples
// Input	        Output
// str:
// "123"	 		6
// str:
// "0101"			2
// str:
// "so cool!!1!"	1

function charSum (str) {
  var strarr = str.split("");
  return strarr.reduce(function(accumulator, item) {
    if(parseInt(item, 10)) {
      accumulator += parseInt(item, 10);
      return accumulator;
    } else {
      return accumulator;
    }
  }, 0);
}

console.log( charSum("123") );
console.log( charSum("0101") );
console.log( charSum("so cool!!1!") );

// ------------------------------------



