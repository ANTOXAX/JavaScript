xy = {
	px: 0,
	py: 0
};

Object.defineProperty(xy, "x", {
	get: function(){
		return this.px	
	},
  	set: function(val){
    	if (typeof(val) == "number") this.px = val;
  	}
});

Object.defineProperty(xy, "y", {
	get: function(){
		return this.py
	},
  	set: function(val){ 
  		if (typeof(val) == "number") this.py = val;
  	}
});