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

console.log( countVowels("kani muni hana aki") );

// ---------------------------------------------

