// Capitalize each first letter of array element and make simple the res.
// so [kANi, muNi, hANA, akI] should return [Kani, Muni, Hana, Aki]

var testArr = ['kANi', 'muNi', 'hANA', 'akI'];

var capWord = function(word) {
	return word[0].toUpperCase() + word.slice(1).toLowerCase();
};

var capitalizeEachWord = function(array, i) {
  i=i||0;

  if(i === array.length) {
    return array;
  }

  array[i] = capWord(array[i]);

  return capitalizeEachWord(array, i+1);
  
};

console.log(capitalizeEachWord(testArr));