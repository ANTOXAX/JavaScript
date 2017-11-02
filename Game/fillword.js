document.onmousedown = function(){return false};
document.onselectstart = function(){return false};
var tb = document.getElementById('tb');



function green(e){
	var i = 1;
	var arr = [];
	var slovo = '';

	function mo(e){
	e.target.classList.add('green');
	arr[i] = e.target;
	i += 1;
	}

	e.target.classList.add('green');
	arr[0] = e.target;
	this.addEventListener('mouseover', mo);
	this.addEventListener('mouseup', function(){
		tb.removeEventListener('mouseover', mo);
		for (i = 0; i < arr.length; i++) slovo += arr[i].innerText;
		console.log(slovo);
		if (slovo == 'АЛЛИГАТОР') document.getElementById('a').style.color = 'green';
		else if (slovo == 'БАБУИН') document.getElementById('bab').style.color = 'green';
		else if (slovo == 'БАРСУК') document.getElementById('bar').style.color = 'green';
		else if (slovo == 'КОРОВА') document.getElementById('k').style.color = 'green';
		else if (slovo == 'ВЕРБЛЮД') document.getElementById('v').style.color = 'green';
		else if (slovo == 'ГОРИЛЛА') document.getElementById('g').style.color = 'green';
		else if (slovo == 'ЗЕБРА') document.getElementById('z').style.color = 'green';
		else if (slovo == 'НОСОРОГ') document.getElementById('n').style.color = 'green';
		else if (slovo == 'МОРЖ') document.getElementById('m').style.color = 'green';
		else if (slovo == 'ПАНТЕРА') document.getElementById('p').style.color = 'grren';
		else {
			for (i = 0; i < arr.length; i++){
				arr[i].classList.remove('green');
			}
		}
		i = 1;
		arr = [];
		вslovo = '';
	});
}

tb.addEventListener('mousedown', green);