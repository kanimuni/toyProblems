// Build a function that converts a hexadecimal number to a base 10 number. 
// Do not use toString or parseInt.

// Input(hex)      Output(decimal)
// "ff"                  255
// "2329"            9001
// "10"                16


function hexToDec (hex, sum) {
  sum = sum || 0;
  var lookupObj = {
    "0":0,
    "1":1,
    "2":2,
    "3":3,
    "4":4,
    "5":5,
    "6":6,
    "7":7,
    "8":8,
    "9":9,
    "a":10,
    "b":11,
    "c":12,
    "d":13,
    "e":14,
    "f":15
  };

  if(hex.length === 1) {
    return sum + lookupObj[hex];
  }

  sum += Math.pow(16, hex.length-1) * lookupObj[hex[0]];

  return hexToDec(hex.slice(1), sum)
}

console.log(hexToDec("10"));