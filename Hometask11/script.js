var settings = {
	'#music': {
		path: 'music.html',
		handler: function(){}
	},
	'#pic': {
		path: 'pic.html',
		handler: function(){}
	},
	'#hello': {
		path: 'hello.html',
		handler: function(){}
	},
	'#name': {
		path: 'name.html',
		handler: function(){
			var d = document.getElementById('yname');
			var yname = prompt('Enter your name');
			d.innerHTML += yname;
		}
	},
	'#+1': {
		path: 'plus1.html',
		handler: function(){
			var btn = document.getElementById('+1');
			var i = 1;
			btn.addEventListener('click', function(){
				alert(i);
				i++
			});
		}
	},
};

var div = document.getElementById('div');

var changeHashRoute = function(){
	if (location.hash in settings){
		var path = settings[location.hash].path;
		var h = settings[location.hash].handler;
		var xhr = new XMLHttpRequest();
		xhr.open('GET', path, true);
		xhr.onload = function(){
			div.innerHTML = this.responseText;
			h();
		}
		xhr.send(null);
	}
}

window.onhashchange = changeHashRoute;
changeHashRoute();