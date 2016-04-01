// Write a recursive method called countVowels that returns the number of vowels in a given String
// countVowels('abcedfg') ->2

var countVowels = function(string, i, count) {
	i = i||0;
	count = count||0;

	if(i === string.length) {
		return count;
	}

  if(string[i].match(/[aeiou]/i)) count++;

  return countVowels(string, i+1, count);

};

// console.log( countVowels("kani muni hana aki") );

// ---------------------------------------------

var countVowelsLoop = function(string) {
  var count = 0;
  for(var i=0; i<string.length; i++) {
    if(string[i].match(/[aeiou]/i)) {
      count++;
    }
  }
  return count;
};

// console.log( countVowels("kani muni hana aki") );

// ---------------------------------------------

var countVowelsReduce = function(string) {
  var stringArr = string.split("");
  return stringArr.reduce(function(accumulator, item) {
    if(item.match(/[aeiou]/i)) {
      accumulator++;
      return accumulator;
    } else {
      return accumulator;
    }
  }, 0);
};

console.log( countVowelsReduce("kani muni hana aki") );