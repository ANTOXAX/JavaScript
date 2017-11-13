xy = {};

Object.defineProperty(xy, "px", {
  set: function(val){
    if (typeof(val) == "number") this.x = val;
  }
});

Object.defineProperty(xy, "py", {
  set: function(val){ 
  	if (typeof(val) == "number") this.y = val;
  }
});