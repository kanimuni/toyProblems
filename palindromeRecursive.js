//test for palindrome recursively

var palindromeRecursive = function(string) {
  var result = true;

  var innerfunction = function(str) {
    if(str.length === 2) {
    	if(str[0] === str[1]) {
        result = true;
    	  return;
    	} else {
        result = false;
        return;
    	}
    } else if (str.length === 1) {
    	return;
    } else {
    	if(str[0] === str[str.length-1]) {
    		result = true;
    	} else {
    		result = false;
    		return;
    	}
    }
    return innerfunction(str.slice(1,str.length-1));
  };

  innerfunction(string);
  return result;
};


//console.log(palindromeRecursive("racecar"));
