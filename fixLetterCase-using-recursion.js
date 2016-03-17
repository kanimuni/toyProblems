// Our array of messy words
// var capitals = ["berlin", "parIs", "MaDRiD"];
// fix this such that the first character is capitalized and the rest not.


var fixWord = function(word) {
  var fixedWord = "";
  fixedWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
  return fixedWord;
};

var fixWordArray = function(array) {
  var newArray = [];

  var innerfunction = function(arr) {
    if(arr.length === 0) {
      return newArray;
    } else {
      newArray.push( fixWord(arr[0]) );
    }
    return innerfunction(arr.slice(1));
  };

  innerfunction(array);
  return newArray;
};

// var capitals = ["berlin", "parIs", "MaDRiD"];

// console.log(fixWordArray(capitals));




// Capitalize function
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// Our recursive function
function fixLetterCase(array, i) {    
  // Base case
  if (i === array.length) {
    return;
  } 
  // Action
  array[i] = capitalize(array[i]);
  // Recursive case
  return fixLetterCase(array, i + 1);
}

// Here is our function call
fixLetterCase(capitals, 0);

console.log(capitals);