var in1 = document.getElementById('in1');
var in2 = document.getElementById('in2');
var body = document.getElementById('body');
var btn = document.getElementById('+');
var div;
var inp;
var btn1;
var input = 1;
var b = -1;
var del;
btn.addEventListener('click', function(){
	// body.appendChild(div);
	div = document.createElement('div');
	inp = document.createElement('input');
	btn1 = document.createElement('button');
	btn1.textContent = 'X';
	body.appendChild(div);
	div.appendChild(inp);
	div.appendChild(btn1);
	inp.id = input;
	btn1.id = b;
	b--;
	input++;
});

