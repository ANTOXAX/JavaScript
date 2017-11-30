var mp3 = document.getElementsByTagName('audio')[0];
//var mp3 = document.getElementsByTagName('video')[0];
var play = document.getElementById('play');
var stop = document.getElementById('stop');
var ct = document.getElementById('ct');
var d = document.getElementById('d');
var time = document.getElementById('time');
var volume = document.getElementById('volume');
var slow = document.getElementById('slow');
var fast = document.getElementById('fast');
var repeat = document.getElementById('repeat');
volume.innerHTML = mp3.volume;	
pause = document.createElement('button');
pause.innerHTML = 'pause';
setTimeout(function(){
	var arr = String(mp3.duration % 60).split('');
	if (arr[1] == undefined){
		arr.unshift('0');
		time.innerHTML = Math.floor(mp3.currentTime / 60) + ':00/' + Math.floor(mp3.duration / 60) + ':' + Math.round(Number(arr.join('')));
	}
	else time.innerHTML = Math.floor(mp3.currentTime / 60) + ':00/' + Math.floor(mp3.duration / 60) + ':' + Math.round(mp3.duration % 60);
}, 200);
d.onclick = function(e){
	ct.style.width = e.offsetX + 'px';
	mp3.currentTime = ct.style.width.match(/\d\d\d?/)[0] * mp3.duration / getComputedStyle(d).width.match(/\d\d\d/)[0];
}

play.onclick = function(){
	mp3.play();
	var status = setInterval(function(){
		if (String(Math.round(mp3.currentTime % 60)).split('')[1] == undefined){
			var arr = String(Math.round(mp3.currentTime % 60)).split('');
			arr.unshift('0');
			time.innerHTML = Math.floor(mp3.currentTime / 60) + ':' + arr.join('') + '/' + Math.floor(mp3.duration / 60) + ':' + Math.round(mp3.duration % 60);
		}
		else time.innerHTML = Math.floor(mp3.currentTime / 60) + ':' + Math.round(mp3.currentTime % 60) + '/' + Math.floor(mp3.duration / 60) + ':' + Math.round(mp3.duration % 60);
		ct.style.width = getComputedStyle(d).width.match(/\d\d\d/)[0] * mp3.currentTime / mp3.duration + 'px';
	}, 100);
	document.getElementsByTagName('body')[0].replaceChild(pause, play);
}

pause.onclick = function(){
	mp3.pause();
	document.getElementsByTagName('body')[0].replaceChild(play, pause);
	clearInterval(status);
}

stop.onclick = function(){
	mp3.pause();
	clearInterval(status);
	mp3.currentTime = 0;
	ct.style.width = '0px';
	if (mp3.paused == true) document.getElementsByTagName('body')[0].replaceChild(play, pause);
}

volume.oninput = function(){
	console.log(this.value);
	mp3.volume = this.value;
}

repeat.onclick = function(){
	this.classList.toggle('activated');
	if (this.classList.contains('activated') == true) mp3.loop = true;
	else mp3.loop = false;
}

slow.onclick = function(){
	mp3.playbackRate *= 0.8;
}

fast.onclick = function(){
	mp3.playbackRate *= 1.25;
}

var xhr = new XMLHttpRequest();
xhr.open('GET', 'music.json', true);
xhr.onload = function(){
	var music = JSON.parse(this.responseText);
	var body = document.getElementsByTagName('body')[0];
	music.forEach(function(elem){
		var div = document.createElement('div');
		//body.innerHTML += '<div><img src = "' + elem.img + '" width = "50px" height = "50px" > <button class = "track">play</button> '+ elem.title + '</div>'
		body.appendChild(div);
		var img = document.createElement('img');
		img.setAttribute('src' , elem.img);
		img.style.width = '50px';
		img.style.height = '50px';
		div.appendChild(img);
		var btn = document.createElement('button');
		btn.setAttribute('adr', elem.adr);
		btn.classList.add('track');
		btn.innerHTML = 'play';
		div.appendChild(btn);
		div.innerHTML += ' ' + elem.title;
	});
	var tracks = document.getElementsByClassName('track');
	for(var i = 0; i < tracks.length; i++){
		tracks[i].onclick = function(){
			mp3.removeAttribute('src');
			mp3.setAttribute('src', this.getAttribute('adr'));
			mp3.play();
			if (mp3.paused == true) document.getElementsByTagName('body')[0].replaceChild(pause, play);
			setTimeout(function(){
				var arr = String(Math.round(mp3.duration % 60)).split('');
				if (arr[1] == undefined){
					arr.unshift('0');
					time.innerHTML = '0:00/' + Math.floor(mp3.duration / 60) + ':' + arr.join('') + '';
				}
				else time.innerHTML = Math.floor(mp3.currentTime / 60) + ':00/' + Math.floor(mp3.duration / 60) + ':' + Math.round(mp3.duration % 60);
			}, 200);
			var status = setInterval(function(){
				if (String(Math.round(mp3.currentTime % 60)).split('')[1] == undefined){
					var arr = String(Math.round(mp3.currentTime % 60)).split('');
					arr.unshift('0');
					time.innerHTML = Math.floor(mp3.currentTime / 60) + ':' + arr.join('') + '/' + Math.floor(mp3.duration / 60) + ':' + Math.round(mp3.duration % 60);
				}
				else time.innerHTML = Math.floor(mp3.currentTime / 60) + ':' + Math.round(mp3.currentTime % 60) + '/' + Math.floor(mp3.duration / 60) + ':' + Math.round(mp3.duration % 60);
				ct.style.width = getComputedStyle(d).width.match(/\d\d\d/)[0] * mp3.currentTime / mp3.duration + 'px';
			}, 100);
		}
	}
}
xhr.send(null);
//.play(); — воспроизведение аудио/видео когда возможно.
//.pause(); — ставит на паузу, когда возможно.
//.paused true — если пауза.(неперезаписывается)
//.src — путь к файлу(перезаписывается)
//.controls — если true, то браузер стандартный
//.volume — от 0 до 1
//.currentTime — кол-во секунд с начала(перезаписывается)
//.duration — длительность песни в секунда(неперзаписывается)
//.muted — если true, то звук в аудио/видео приглушается
//.playbackRate — по умолчанию 1. принимает в себя целое число. Это скорость воспроизведения.
//.loop если true - повторение
/////////////////////////////////
//only video
//.width — размеры области просмотра(перезап)
//.height 
//.videowidth — оригинальные размеры
//.videoheight
////////////////////////////////
//EVENTS
/*loadeddata — когда загружен достаточынй кусок данных для воспроизведения
loadedemetadata — когда загрузились данные, описывающие песню
play — из stop в play
pause — из play в pause
ended — когда проигрывание завершено
error — при ошибке
volumechange — при изменении громкости
*/

