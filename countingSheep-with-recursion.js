// count sheep until the given number and log goodnight with the last sheep.

var countSheep = function(num) {
	if(num === 0) {
    console.log("Good night ... Sweat Dreams!");
    return;
	}

  console.log("counting Sheep .... ");
  countSheep(num -1);
};

countSheep(100);