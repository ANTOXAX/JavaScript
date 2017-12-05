var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var X, Y;
var pencil  = localStorage.getItem('pencil');

if (pencil){
	var x = new Uint8ClampedArray(2000000);
	var data = pencil.split(',');
	for(var i=0; i< data.length; i++)
	{
		x[i] = data[i];
	}
	var b = new ImageData(x, 1000, 500);
	ctx.putImageData(b, 0, 0);
	console.log(b);
}

var pen = function(e){
	ctx.beginPath();
	ctx.moveTo(X, Y);
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();
	X = e.offsetX;
	Y = e.offsetY;
}

canvas.addEventListener('mousedown', function(e){
	X = e.offsetX;
	Y = e.offsetY
	canvas.addEventListener('mousemove', pen);
})

canvas.addEventListener('mouseup', function(){
	canvas.removeEventListener('mousemove', pen);
});

window.onunload = function() {
	pencil = ctx.getImageData(0, 0, 1000, 500).data;
 	localStorage.setItem('pencil', pencil);
}