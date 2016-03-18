//1. Another recursion problem: Write a function that accepts a string and then reverses it.

//iterating from reverse using for loop
// var reverseString = function(str) {
//   var resultString = "";
//   for (var i=str.length-1; i>=0; i--) {
//     resultString += str[i];
//   }
//   return resultString;
// };

//console.log(reverseString("kanimuni"));


// var reverseStringRec = function(str) {
// 	var result = "";
	
// 	var innerfunction = function(string) {
//     if(string.length === 0) {
//       return result;
//     } else {
//       result += string[string.length-1];
//     }
//     return innerfunction( string.substring(0, string.length-1) );
// 	};

//   innerfunction(str);
//   return result;
// };

//console.log(reverseStringRec("kanimuni"));

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
