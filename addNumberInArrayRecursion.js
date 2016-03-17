/*Add up all numbers in the list. [2,7,8,3,1,4] Returns 25*/
//with a for loop
//recursion
var arr = [2,7,8,3,1,4];
var nestedarr = [[10, 10],[10],10, 10, 10, [10, 10, [10, [10, 10], 10], 10, 10], 10,10]; //total should be 160

var addAllNumbers = function(array) {
  var result = 0;

  var innerfunction = function(arr) {
    for(var i=0; i<arr.length; i++) {
      if(Array.isArray(arr[i])) {
        innerfunction(arr[i]);
      } else {
        result += arr[i];
      }
    }
  };

  innerfunction(array);
  return result;
};


// console.log(addAllNumbers(arr));
// console.log(addAllNumbers(nestedarr));