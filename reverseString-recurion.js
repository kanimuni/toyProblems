// Another recursion problem: Write a function that accepts a string and then reverses it.
// iterating from reverse using for loop
var reverseString = function(str) {
  var resultString = "";
  for (var i=str.length-1; i>=0; i--) {
    resultString += str[i];
  }
  return resultString;
};

console.log(reverseString("kanimuni"));
// ----------------------------------------------------------------

var reverseStringRec = function(str) {
	var result = "";
	
	var innerfunction = function(string) {
    if(string.length === 0) {
      return result;
    } else {
      result += string[string.length-1];
    }
    return innerfunction( string.substring(0, string.length-1) );
	};

  innerfunction(str);
  return result;
};

console.log(reverseStringRec("kanimuni"));

// ----------------------------------------------------------------
var reverse = function(string) {

  // Base case
  if (string.length === 1) {
    return string;
  }

  // Recursive case
  return reverse(string.slice(1)) + string.charAt(0);
};

console.log( reverse("abc") );
// ----------------------------------------------------------------

var reverseString2 = function(string) {
	if(string.length === 0) {
		return "";
	}

    if(string.length === 1) {
		return string;
	}
    
    return string[string.length-1] + reverseString2(string.slice(0, -1));

};


// console.log( reverseString2("abc") );

// ----------------------------------------------------------------
// do the same for an array
var testarr = ['a','b','c','d'];

var reverseArray = function(array, i, resultArray) {
  i = i||0;
  resultArray = resultArray||[];
  
  if(array.length === 0) {
    return resultArray;
  }
  
  resultArray.push(array.pop());

  return reverseArray(array, i+1, resultArray);
};

console.log ( reverseArray(testarr) );

// ----------------------------------------------------------------

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

console.log(reverseArrayInPlace([1,2,3,4]));