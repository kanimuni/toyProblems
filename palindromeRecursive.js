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

// ------------------------------------------


var palindrome = function(string) {
  debugger;
  //base case1: if string length is 3 and first and last char are same
  if( (string.length === 3) && (string[0] === string[2]) ) {
    //yes: return true
    return true;
  }

  //base case2: if string length is 2 and the two chars are same
  if( (string.length === 2) && (string[0] === string[1]) ) {
    //yes: return true
    return true;
  }


  //check if the first and last letters are the same
  if(string[0] === string[string.length-1]) {
    //yes: recurse on the string minus those two characters
    return palindrome(string.slice(1, string.length-1));
  } else {
    //no: return false;
    return false;
  }
};