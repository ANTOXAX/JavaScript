var body = document.getElementById('body');
var btn = document.getElementById('+');
var sum = document.getElementById('sum');
var otv = document.getElementById('otv');
var input = document.getElementsByTagName('input');
var sum1 = 0;

btn.addEventListener('click', function(){
	var div = document.createElement('div');
	var inp = document.createElement('input');
	var del = document.createElement('button');
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
	for (var i = 0; i < input.length; i++){
		sum1 += Number(input[i].value);
	};	
	otv.textContent = sum1;
	sum1 = 0;
});