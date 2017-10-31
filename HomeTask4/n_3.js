var winlength;
var i = 0;
setInterval(function(){
		scrollTo(1,i);
	    i += 10;
	    winlength = scrollY;
	    if (winlength > 9317) clearInterval(1);
	},1)