// NOT DONE LIST
// BinaryTreeSum
// DeepEquals
// RockPaperScissors
// RollDiceRecursion


var add = function(array, i, sum) {
	i = i || 0;
	sum = sum || 0;

	if(i === array.length) {
		return sum;
	}

	sum += array[i];

	return add(array, i+1, sum);

};

// console.log(add([2,2,7,8,3,1,4]));

// ------------------------------------------

var altSign = function(array, i, resultArray) {
	i = i||0;
	resultArray = resultArray||[];

	if(i === array.length) {
		return resultArray;
	}

	if(i % 2 === 0) {
		resultArray.push(array[i]);
	} else {
		resultArray.push(array[i] * -1);
	}

	return altSign(array, i+1, resultArray);

};

// console.log(altSign([2,7,8,3,1,4]));

// ------------------------------------------

var messArray = function(array, i, resultString) {
	i = i||0;
	resultString = resultString || "";

	if(i === array.length) {
    return resultString;
	}
  
  resultString += array[i].split("").sort().pop();

  return messArray(array, i+1, resultString);

};

// console.log( messArray(['kani', 'muni', 'aki', 'hana', 'ichizuka']) );
// ------------------------------------------

var augmentArray = function(array, augment, i, resultArray) {

  i = i||0;
  resultArray = resultArray||[];
  
  if(i === array.length) {
    return resultArray;
  }
 
  array[i].push(augment);
  resultArray.push(array[i]);

  return augmentArray(array, augment, i+1, resultArray);

};

//console.log(augmentArray([ [], [3], [7] ], 10));

// ------------------------------------------

var capWordArray = function(array, i) {
  i = i||0;
  var tempword = "";
  if(i === array.length) {
    return array;
  }
  
  tempword = array[i][0].toUpperCase() + array[i].slice(1).toLowerCase();
  array[i] = tempword;

  return capWordArray(array, i+1);

};

// console.log(capWordArray(['kANi', 'muNi', 'hANA', 'akI']));
// ------------------------------------------

var climbingStairs = function(number) {
  if(number === 0) {
    return 0;
  } else if(number === 1) {
    return 1;
  } else if(number === 2) {
    return 2;
  }

  return climbingStairs(number -2) + climbingStairs(number-1);

};

// console.log( climbingStairs(0) );
// console.log( climbingStairs(1) );
// console.log( climbingStairs(2) );
// console.log( climbingStairs(3) );
// console.log( climbingStairs(4) );
// console.log( climbingStairs(5) );
// console.log( climbingStairs(6) );
// ------------------------------------------

var countingSheep = function(number, i) {
  i = i||0;
  if(i === number) {
    console.log("good night");
    return;
  }

  console.log("counting " + i + " sheep" );

  countingSheep(number, i+1);
};

// countingSheep(10);
// ------------------------------------------

// Same as above but make it count down back

var countingSheep = function(number, i) {
  i = i||0;
  if(i === number) {
    console.log("good night");
    return;
  }

  console.log("counting " + i + " sheep");
  countingSheep(number, i+1);
  console.log("counting down " + i + " sheep" );
};

// countingSheep(10);
// ------------------------------------------

var countKeysInObject = function(object, targetKey) {
  //declare result variable
  var result = 0;

  //declare innerfunction
var innerFunction = function(obj, target) {
    //loop through each key using for in loop
  for(var key in obj) {
    if(key === target) {
      if(Object.prototype.toString.call(obj[key] === "[object Object]")) {
        result++;
        innerFunction(obj[key], target);
      } else {
          result++;
        }
      } else {
        if(Object.prototype.toString.call(obj[key]) === "[object Object]") {
          innerFunction(obj[key], target);
        } else {
          continue;
        }
      }
    }
  };
  
  //invoke the innerfunction with given arugument
  innerFunction(object, targetKey);
  //return the result
  return result;
};

var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};

// console.log(countKeysInObject(testobj, 'r'));
// console.log(countKeysInObject(testobj, 'e'));
// ------------------------------------------

var countElementsInArray = function(array, targetElement) {
  var result = 0;

  var innerFunction = function(arr, target) {
  	for(var i=0; i<arr.length; i++) {
  		if(Array.isArray(arr[i])) {
  			innerFunction(arr[i], target);
  		} else {
  		  if(arr[i] === targetElement) {
  			  result++;
  		  }
  		}
  	}
  };
  innerFunction(array, targetElement);
  return result;
};

var testarr = [ 2,7,[4,4],1,[ 1,[ 4, [4,1] ] ]  ];
// console.log ( countElementsInArray(testarr, 4) );
// ------------------------------------------


var createRepeatList = function(value, times, i, resultArray) {
	i = i||0;
	resultArray = resultArray || [];

	if(i === times) {
		return resultArray;
	}
  
  resultArray.push(value);

  return createRepeatList(value, times, i+1, resultArray);

};

//console.log( createRepeatList(0,10) );
// ------------------------------------------

var factorial = function(number) {
  if(number < 0) {
  	console.log("number needs to be positive");
  	return;
  }

  if(number === 0) {
  	return 1;
  }

  if(number === 1) {
  	return 1
  }

  if(number === 2) {
  	return 2;
  }

  return number * factorial(number-1);
};

//console.log(factorial(8));
// ------------------------------------------

var nThFibonacci = function(number) {
  if(number === 0) {
  	return 0;
  }

  if(number === 1) {
  	return 1;
  }

  if(number === 2) {
    return 1;
  }

  return nThFibonacci(number-2) + nThFibonacci(number-1);
};

// 0123456 7   8  9
// 0112358 13  21 34
// console.log(nThFibonacci(8));
// console.log(nThFibonacci(9));
// ------------------------------------------

var findMaxInArr = function(array) {
  var result = -Infinity;

  var innerFunction = function(arr) {
  	for(var i=0; i<arr.length; i++) {
  		if(Array.isArray(arr[i])) {
  			innerFunction(arr[i]);
  		} else {
  			if(result < arr[i]) {
  				result = arr[i];
  			} else {
  				result = result;
  			}
  		}
  	}
  };
  innerFunction(array);
  return result;
};

var arr2 = [[1,2],[3],[4,5,[6,7,[8,[9,18],3,2],1,0],13,14],1];
// console.log(findMaxInArr(arr2));
// ------------------------------------------

var flattenArray = function(array) {
	var resultArray = [];

  var innerFunction = function(arr) {
    for(var i=0; i<arr.length; i++) {
    	if(Array.isArray(arr[i])){
    		innerFunction(arr[i]);
    	} else {
    		resultArray.push(arr[i]);
    	}
    }
  };
  innerFunction(array);
	return resultArray;
};

var testarr = [ [1,2], [3,[4,5]], [6,[7,[8,9]],0] ];
// console.log(flattenArray(testarr));
// ------------------------------------------


var gcd = function(num1, num2) {
  var smaller = num1 < num2 ? num1 : num2;
  var bigger = num1 < num2 ? num2 : num1;

  if(bigger % smaller === 0) {
    return smaller;
  }
  
  return gcd(smaller-1, bigger);

};
// console.log("GCD for 4 & 16 is " + gcd(4,16) );

// console.log("GCD for 354 & 12345 is " + gcd(354, 12345) );
// ------------------------------------------

var guessNumber = function(compNumber) {
  var guess = prompt("enter a number between 1 and 10");
  guess = Number(guess);
  if(guess === compNumber) {
    console.log("You got it, you must be pshychic");
    return;
  }
  guessNumber(compNumber);
};

// guessNumber(5);
// ------------------------------------------

var myMoneyNow = function(investment, interest, years, i, total) {
  i = i||0;
  if(i === years) {
    return investment;
  }
  investment = investment + investment*(interest/100);
  return myMoneyNow(investment, interest, years, i+1);
};

// console.log( myMoneyNow(1000, 10, 1) );
// console.log( myMoneyNow(1000, 10, 2) );
// console.log( myMoneyNow(1000, 10, 3) );
// ------------------------------------------

var isEven = function(number) {
  if(number === 0) {
    return true;
  }

    if(number === 1) {
    return false;
  }

    if(number === 2) {
    return true;
  }

  return isEven(number-2);
};

// console.log(isEven(10));
// console.log(isEven(11));
// ------------------------------------------

var nestedObjectsAdd = function(object) {
  var total = 0;

  var innerFunction = function(obj) {
  	for(var key in obj) {
  		if(Object.prototype.toString.call(obj[key]) === "[object Object]") {
  			nestedObjectsAdd(obj[key]);
  		} else {
  			total += obj[key];
  		}
  	}
  };
  innerFunction(object);
  return total;
};

	node = {
		value: 100,
		children1 : {value : 200},
		children2 : {value : 300, children3: {value: 400}}
	};

	// console.log(nestedObjectsAdd(node));
// ------------------------------------------


var numToText = function(string) {
  //declare a variable that will be returned at the end 
  var result = "";
  //create an code object for char translation
  var translationObject = {
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
  };
  //Create inner function
  var innerFunction = function(str) {
    //if string length is zero then return
    if(str.length === 0) {
      return;
    }
  //check if character at begining of string is in code object
    if(translationObject.hasOwnProperty(str.charAt(0))) {
    //yes: then take the translation and add it to resut
      result += translationObject[str.charAt(0)];
    } else {
    //no: just add char as is to result
      result += str.charAt(0);
    }
  //invoke innerfunction on string minus its first char
  innerFunction(str.slice(1));
  };
  //invoke innerfunction on given argument
  innerFunction(string);
  //return the result
  return result;
};

// console.log(numToText("I have 5 dogs and 6 ponies"));
// ------------------------------------------


var numToText2 = function(string, resultString) {
  resultString = resultString||"";

  var translationObject = {
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
  };


  if(string.length === 0) {
    return resultString;
  }

  if(translationObject.hasOwnProperty(string.charAt(0))) {
    resultString += translationObject[string.charAt(0)];
  } else {
    resultString += string.charAt(0);
  }

  return numToText2(string.slice(1), resultString);

};

// console.log(numToText2("I have 5 dogs and 6 ponies"));
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

// console.log(palindrome('anna'));
// console.log(palindrome('racecar'));
// ------------------------------------------


var isPowerOfTwo = function(number) {

  if(number < 0) {
    console.log("number needs to be positive");
    return false;
  }
  if(number === 0) {
    return false;
  }
  if(number === 1) {
    return true;
  }
  if(number === 2) {
    return true;
  }

  if(number %2 === 0) {
    return isPowerOfTwo(number/2);
  } else {
    return false;
  }

};

// console.log("12 is " + isPowerOfTwo(12) );
// console.log("1024 is " + isPowerOfTwo(1024) );
// console.log("1026 is " + isPowerOfTwo(1026) );
// console.log("1 is " + isPowerOfTwo(1) );
// ------------------------------------------


var pringNumUpDown = function(min, max) {
  if(min === max) {
    console.log(min);
    return;
  }

  console.log(min);

  pringNumUpDown(min+1, max);
  console.log(min);
};

// pringNumUpDown(5, 10);
// ------------------------------------------

var reduceZeros = function(array, i, resultArray) {
  i = i||0;
  resultArray = resultArray||[];

  if(i === array.length) {
    return resultArray;
  }

  if(array[i] === 0) {
    if(array[i+1] === 0) {
      //do nothing
    } else {
      resultArray.push(array[i]);
    }
	} else {
		resultArray.push(array[i]);
	}

	return reduceZeros(array, i+1, resultArray);
};

// console.log(reduceZeros([1,0,0,2,0,3,0,0]));
// ------------------------------------------

var reverseString = function(string, resultString) {
  resultString = resultString || "";
  if(string.length === 0) {
    return resultString;
  }
  resultString += string[string.length-1];
  return reverseString(string.slice(0, string.length-1), resultString);
};

// console.log( reverseString("kanimuni") );
// ------------------------------------------

var reverseStringSame = function(string) {
  if(string.length === 1) {
    return string;
  }
  return reverseStringSame(string.slice(1)) + string[0];
};

// console.log(reverseStringSame("abcdef"));
// ------------------------------------------

var reverseArrayInPlace = function(array, i) {
  i = i||0;
  var tmp = null;

  if(array.length === 1) {
    return array;
  }

  if( i === Math.floor(array.length/2) ) {
    return array;
  }
  
  tmp = array[i];
  array[i] = array[array.length-1-i];
  array[array.length-1-i] = tmp;


  return reverseArrayInPlace(array, i+1);
};

// var arr = [1,2,3,4,5];
// console.log(arr);
// console.log(reverseArrayInPlace(arr));
// console.log(arr);
// ------------------------------------------

var sumOfDigits = function(number, i, sum) {
  i = i||0;
  sum = sum||0;
  if(i === number.toString().length) {
    return sum;
  }
  sum += Number(number.toString().charAt(i));
  return sumOfDigits(number, i+1, sum);
};

// console.log(sumOfDigits(12345));
// ------------------------------------------

var vowelcount = function(string, i, count) {
  i = i||0;
  count = count||0;
  var lookupObject = {
    a:"true",
    e:"true",
    i:"true",
    o:"true",
    u:"true"
  };
  if(i === string.length) {
    return count;
  }
  if( lookupObject.hasOwnProperty(string.charAt(i)) ) {
    count++;
  }
  return vowelcount(string, i+1, count);
};

// console.log(vowelcount('aeiou'));
// ------------------------------------------


var rps = function(rounds) {
  var result = [];
  var throws = ['rock', 'paper', 'scissors'];

  var innerFunction = function(permutations, i) {
    if(i === rounds) {
      return result.push(permutations);
    }
    
    for(var j=0; j<throws.length; j++) {
      innerFunction(permutations.concat(throws[j]), i+1);
    }
  };
  innerFunction([], 0);
  return result;
};

console.log(rps(3));



























