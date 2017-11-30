var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var pencil = function(e){
	ctx.beginPath();
	ctx.fillRect(e.offsetX, e.offsetY, 1, 1);
	ctx.stroke();
	canvas.addEventListener('mousemove', pencil);
	canvas.addEventListener('mouseup',function(){
		canvas.removeEventListener('mousemove', pencil);
	})
}
canvas.addEventListener('mousedown', pencil)