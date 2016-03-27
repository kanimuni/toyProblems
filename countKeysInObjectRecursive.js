//5. Write a function that counts the number of times a key occurs in an object.
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2

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

console.log(countKeysInObject(testobj, 'r'));
console.log(countKeysInObject(testobj, 'e'));