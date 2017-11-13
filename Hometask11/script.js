var settings = {
	'#bhello': 'bhello.html',
	'#pic': 'pic.html',
	'#hello': 'hello.html',
	'#prompt': 'prompt.html',
	'#button': 'but.html'
};

var div = document.getElementById('div');

var changeHashRoute = function(){
	if (location.hash in settings){
		var path = settings[location.hash];
		var xhr = new XMLHttpRequest();
		xhr.open('GET', path, true);
		if (String(location.hash) == '#prompt'){
			xhr.onload = function(){
				console.log(location.hash);
				var iname = prompt('Введите ваше имя.');
				div.innerText = iname;
			}
		}
		else if (String(location.hash) == '#button'){
			xhr.onload = function(){
				var i = 0;
				var but = document.createElement('button');
				but.setAttribute('type', 'button');
				but.textContent = '+1';
				div.appendChild(but);
				but.addEventListener('click', function(){
					i++;
					alert(i);
				}); 
			}
		}
		else
			xhr.onload = function(){
				div.innerHTML = this.responseText;
			}
		xhr.send(null);
	}
}

window.onhashchange = changeHashRoute;
changeHashRoute();