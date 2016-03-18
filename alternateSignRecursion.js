// Alternate the numbers sign regardless of their original sign. 
// Start with +; [2,7,8,3,1,4] Returns [2,-7,8,-3,1,-4]
// first with loop
// recursivel
// ------------------------------------------------------------------------------
// var testarray = [2,7,8,3,1,4]

 // var alternateSign = function(array) {
 //   var resultArray = []
 //   var innerfunction = function(arr) {
 //     for(var i=0; i<arr.length; i++) {
 //     	if(i%2===0) {
 //     		if(arr[i]<0) {
 //     			resultArray.push(arr[i]*(-1));
 //     		} else {
 //     			resultArray.push(arr[i]);    			
 //     		}
 //     	} else {
 //         if(arr[i]<0) {
 //           resultArray.push(arr[i]);
 //         } else {
 //           resultArray.push(arr[i]*(-1));         
 //         }
 //       }
 //     }
 //   }
 //   innerfunction(array);
 //   return resultArray;
 // }
 
 // console.log(alternateSign(testarray));
// ------------------------------------------------------------------------------

// var arr = [2,4,3,7,8,3,1,4];

// var alternateSign = function(array) {
//   var newArray = [];
//   var index = (array.length)-1;
//   while (index >= 0) {
//     if (index % 2 === 0) {
//       newArray.push(array[index]);
//       index--;
//     } else {
//       newArray.push(array[index]*-1);
//       index--;
//     }
//   }
//   return newArray.reverse();
// };

// console.log(alternateSign(arr));

// ------------------------------------------------------------------------------

var testarray = [1,2,3,4,5,6,7];

var alternateSign = function(array, i) {
  if (i === array.length) {
    return array;
  }
  
  if (i % 2 === 0) {
    return alternateSign(array, i+1);
  } else {
    array[i] = array[i]*-1;
    return alternateSign(array, i+1);
  }
};

console.log(alternateSign(testarray, 0)); //Invocation for last code
//------------------------------------------------------------------------------