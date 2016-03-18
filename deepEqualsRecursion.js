//Check if two given collections equal deeply.
//By that it means that each key and value passes a thripple equals test
//The implementation should handle both arrays and objects

var deepEquals = function(collection1, collection2) {

 // check if the lengths of the collections are equal,
 var c1len = Array.isArray(collection1) ? collection1.length : Object.keys(collection1).length;
 var c2len = Array.isArray(collection2) ? collection2.length : Object.keys(collection2).length;

 //if not return false
 if(c1len !== c2len) {
   return false;
 }
 //if yes then continue
  for(var key in collection1) { 
  	if( Array.isArray(collection1[key]) ) {
      if( Array.isArray(collection1[key]) !== Array.isArray(collection2[key]) ) {
        return false;
      } else {
      	return deepEquals(collection1[key], collection2[key]);
      }
  	} else if (Object.prototype.toString.call(collection1) === "[object Object]") {
        if(Object.prototype.toString.call(collection1) === "[object Object]" !== Object.prototype.toString.call(collection2) === "[object Object]") {
          return false;
        } else {
        	return deepEquals(collection1[key], collection2[key]);
        }
  	} else {
  		if(collection1[key] !== collection2[key]) {
  			return false;
  		}
  	}
  }
  return true;
};


console.log( "[1,2,3], [1,2,3] is " + deepEquals([1,2,3], [1,2,3]) );
console.log( "[1,2,3], [1,2,4] is " + deepEquals([1,2,3], [1,2,4]) );
console.log( "[1,2,3], [1,2] is " + deepEquals([1,2,3], [1,2]) );

console.log( "{a:1, b:2}, {a:1,b:2} is " + deepEquals( {a:1, b:2}, {a:1,b:2}) );
console.log( "{a:1, b:2}, {a:1} is " + deepEquals( {a:1, b:2}, {a:1}) );
console.log( "{a:1, b:2}, {a:1,c:2} is " + deepEquals({a:1, b:2}, {a:1,c:2}) );

console.log( "{}, {} is " + deepEquals({}, {}) );
console.log( "[], [] is " + deepEquals([], []) );
console.log( "{}, [] is " + deepEquals({}, []) );
console.log( "[], {} is " + deepEquals([], {}) );

console.log( "[1,2], {a:1, b:2} is " + deepEquals([1,2], {a:1, b:2}) );


console.log( "{a:1, b:{c:{d:4}}}, {a:1, b:{c:{d:4}}} is " + deepEquals({a:1, b:{c:{d:4}}}, {a:1, b:{c:{d:4}}}) );

console.log( "[1,[2,[3,4]]], [1,[2,[3,4]]] is " + deepEquals([1,[2,[3,4]]], [1,[2,[3,4]]]) );






