var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var isDown = false;
var X, Y;
canvas.addEventListener('mousedown', function(e){
	isDown = true;
	X = e.offsetX;
	Y = e.offsetY

})

canvas.addEventListener('mousemove', function(e){
	if (!isDown) return;
  	ctx.beginPath();
	ctx.moveTo(X, Y);
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();
	X = e.offsetX;
	Y = e.offsetY;
});

canvas.addEventListener('mouseup', function(e){
	isDown = false;
})