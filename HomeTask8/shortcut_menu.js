document.oncontextmenu = function(){return false};

var sel = document.getElementById('sel');
var op1 = document.getElementById('1');
var op2 = document.getElementById('2');
var op3 = document.getElementById('3');
var op4 = document.getElementById('4');
var op5 = document.getElementById('5');
var ops = [op1, op2, op3, op4, op5];
var body = document.getElementById('b');

ops.forEach(function(op){
	op.addEventListener('click', function(){
	alert(op.value);
	sel.style.display = 'none';
});
});


sel.style.display = 'block';
var r = sel.getBoundingClientRect();
var w = r.right-r.left;
var h = r.bottom - r.top;
sel.style.display = 'none';

document.documentElement.addEventListener('contextmenu', function(e){
	var x = e.clientX;
	var y = e.clientY;
	console.log("x: " + x);
	console.log("y: "+y);
	console.log(document.documentElement.clientWidth);
	console.log(document.documentElement.clientHeight); 
	if((x + w > document.documentElement.clientWidth) || (y + h > document.documentElement.clientHeight)) x = x - w; y = y - h;
	x = x + 'px';
	y = y +'px';
	sel.style.position = 'absolute';
	sel.style.top = y;
	sel.style.left = x;
	sel.style.display = 'block';
	document.documentElement.addEventListener("click", function(){
		sel.style.display = 'none';
	});
});