//5. Write a function that counts the number of times a key occurs in an object.
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2

var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};

var countKeysInObj = function(obj, key) {
  var result = 0;
  //debugger;
  var innerfunction = function(object, targetkey) {
    for (var key in object) {
      if(key === targetkey) {
        result++;
      } else if (Object.prototype.toString.call(object[key]) === "[object Object]" ) {
        innerfunction(object[key], targetkey);
      }
    }
  };

  innerfunction(obj, key);
  return result;
};

//console.log(countKeysInObj(testobj, 'r'));

//console.log(countKeysInObj(testobj, 'e'));