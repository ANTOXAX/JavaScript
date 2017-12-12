var img = document.createElement('img');
img.setAttribute('src', 'image.jpg');
var negative = document.getElementById('negative');
var grayscale = document.getElementById('grayscale');
var sepia = document.getElementById('sepia');
var reset = document.getElementById('reset');

var filter = function(img){
	var ireset = function(){
		img.setAttribute('src', 'image.jpg');
	}
	var canvas = document.getElementById('canvas');
  	var ctx = canvas.getContext('2d');
  	ctx.drawImage(img, 0, 0);
  	var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  	var data = imgData.data;

  	negative.addEventListener('mouseup', function(){
  		for (var i = 0; i < data.length; i += 4){
  			data[i] = 255-data[i];
  			data[i+1] = 255-data[i+1];
  			data[i+2] = 255-data[i+2];
  		}
  		ctx.putImageData(imgData, 0, 0);
	});
	negative.addEventListener('mousedown', ireset);

	grayscale.addEventListener('mouseup', function(){
		for (var i = 0; i < data.length; i += 4){
			data[i] = (data[i] + data[i+1] + data[i+1])/3;
			data[i+1] = data[i];
			data[i+2] = data[i];
		}
		ctx.putImageData(imgData, 0, 0);
	})

	sepia.addEventListener('mouseup', function(){
		for (var i = 0; i < data.length; i += 4) {
      		data[i]     = (data[i] * 0.393) + (data[i] * 0.769) + (data[i] * 0.189);// r
      		data[i + 1] = (data[i + 1] * 0.349) + (data[i + 1] * 0.686) + (data[i + 1] * 0.168);// g
      		data[i + 2] = (data[i + 2] * 0.272) + (data[i + 2] * 0.534) + (data[i + 2] * 0.131);// b
    	}
    	ctx.putImageData(imgData, 0, 0);
	});
	sepia.addEventListener('mousedown', ireset);

	reset.addEventListener('click', ireset);
}

img.onload = function() {
  filter(this);
};