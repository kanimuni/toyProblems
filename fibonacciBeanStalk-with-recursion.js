// estimate the height of the magic bean stalk every year 
// the growth every year is the total growth of the last two years
// so basically fibonacci sequence
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, .....

var magicBeans = function(years) {

	if(years <= 2) {
		return 1;
	}
  
  return magicBeans(years - 1) + magicBeans(years - 2);

};


//console.log(magicBeans(40));

