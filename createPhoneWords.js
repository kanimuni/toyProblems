var phoneWords = function(numbers) {
	var result = [];
	var input = (""+numbers).split("");
	var inputLength = input.length;
	var index = 0;
	
	var lookupObject = {
    1:[],
    2:['a', 'b', 'c'],
    3:['d', 'e', 'f'],
    4:['g', 'h', 'i'],
    5:['j', 'k', 'l'],
    6:['m', 'n', 'o'],
    7:['p', 'q', 'r', 's'],
    8:['t', 'u', 'v'],
    9:['w', 'x', 'y', 'z'],
    0:['+']
  };

  var innerFunction = function(letterchoices, words, times) {
    if(times === inputLength) {
      return result.push(words);
    } else {
      for(var i=0; i<letterchoices.length; i++) {
        innerFunction(lookupObject[input[times+1]], words.concat(letterchoices[i]), times+1);
      }
    }
  };
  innerFunction(lookupObject[input[0]], [], 0);
  return result;
};


