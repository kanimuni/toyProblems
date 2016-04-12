// Given an alphabet and a string of text, write a method that tallies the count of 
// each letter defined in said alphabet (case insensitive), then return the result of this tally.

// Input                                         Output
// alphabet:
// "aBc"
// text:
// "aabbccdd"                              "a:2,b:2,c:2"

// alphabet:
// "x"
// text:
// "Racer X is my friend :)"          "x:1"

// alphabet:
// "123"
// text:
// "o hai"                                      "no matches"

function alphaCount (alphabet, text) {
  var obj1 = {};
  var result = "";
  var finalresult = "";
  var sum = 0;
  var lowercaseAlphabet = alphabet.toLowerCase();
  var lowercaseText = text.toLowerCase();
  for(var i=0; i<lowercaseAlphabet.length; i++) {
    obj1[lowercaseAlphabet[i]] = 0;
  }
// console.log(obj1);

  for(var i=0; i<lowercaseText.length; i++) {
    if(obj1[lowercaseText[i]] !== undefined) {
      obj1[lowercaseText[i]]++;
    }
  }

  // console.log(obj1);

  for(var i=0; i<lowercaseAlphabet.length; i++) {
    if(obj1[lowercaseAlphabet[i]] !== 0) {
      result += lowercaseAlphabet[i] + ":" + obj1[lowercaseAlphabet[i]] + ",";    
    }
  }

// console.log(obj1);
  
  finalresult = result.slice(0, result.length-1);
  
  for(var key in obj1) {
   sum += obj1[key];
  }

  if(sum > 0) {
    return finalresult;
  } else {
    return "no matches";
  }

}


console.log(alphaCount( "i984", "ti89" ) );