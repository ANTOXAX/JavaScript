var body = document.getElementById('body');
var btn = document.getElementById('+');
var sum = document.getElementById('sum');
var otv = document.getElementById('otv');
var input = document.getElementsByTagName('input');
var c = 1
var sum1 = 0;

btn.addEventListener('click', function(){
	var div = document.createElement('div');
	var inp = document.createElement('input');
	var del = document.createElement('button');
	div.innerHTML = 'c<sub>' + c + '</sub>: ';
	c++;
	del.setAttribute('class','del');
	del.textContent = 'X'
	body.appendChild(div)
	div.appendChild(inp);
	div.appendChild(del);
	var delt = document.getElementsByClassName('del');
	for (var i = 0; i < delt.length; i++){
		delt[i].addEventListener('click', function(){
			this.parentNode.remove();
		});
	};
});

sum.addEventListener('click', function(){
	sum1 = Number(input[6].value);
	for (var i = 7; i < input.length; i++){
		sum1 += Math.pow(input[5].value, i-6)*input[i].value
	};
	if (sum1 == NaN){
		otv.innerHTML = 'Корректно заполните все поля.';
		sum1 = 0;
	}
	else{
		otv.innerHTML = sum1;
		sum1 = 0;
	}
});