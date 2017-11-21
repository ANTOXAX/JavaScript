var pole = document.getElementById('pole');
var pm = document.getElementById('m+');
var mr = document.getElementById('mr');
var mm = document.getElementById('m-');
var mc = document.getElementById('mc');
var dot = document.getElementById('.');
var znak = document.getElementById('+-');
var plus = document.getElementById('+');
var end = document.getElementById('=');
var num = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
var nums = document.getElementsByClassName('number');
var ce = document.getElementById('ce');
var c = document.getElementById('c');
var del = document.getElementById('del');
var i = 0;
var m = 0;
var z = 0;
var op = document.getElementsByClassName('operations');
var cc = function(){
			n = 0;
			pole.innerText = 0;
		}

del.addEventListener('click', function(){
	str = pole.innerText;
	var a = str.split('')
	a.pop();
	str = a.join('');
	pole.innerText = str;
	if (pole.innerText == '') pole.innerText = 0;
})

c.addEventListener('click', cc);


pm.addEventListener('click', function(){
	m += Number(pole.innerText);
	console.log(m);
});

mm.addEventListener('click', function(){
	m -= Number(pole.innerText);
	console.log(m);
});

mr.addEventListener('click', function(){
	pole.innerText = m;
	console.log(m);
});

mc.addEventListener('click', function(){
	m = 0;
	console.log(m);
});

for(var q = 0; q < nums.length; q++){
	nums[q].addEventListener('click', function(){
		if (Number(pole.innerText) == 0) pole.innerText = '';
		pole.innerText += this.id;
	});
};

ce.addEventListener('click', function(){
	pole.innerText = 0;
});

znak.addEventListener('click', function(){
	pole.innerText*=-1;
});

dot.addEventListener('click', function(){
	pole.innerText += '.';
});

for (var i = 0; i < op.length; i++){
	op[i].addEventListener('click', function(){
		n = Number(pole.innerText);
		pole.innerText = 0;
		end.setAttribute('name', this.id);
		var f = function(){
			if (this.name == '+') n += Number(pole.innerText);
			if (this.name == '/') n /= Number(pole.innerText);
			if (this.name == '*') n *= Number(pole.innerText);
			if (this.name == '-') n -= Number(pole.innerText);
			pole.innerText = n;
			n = 0;
			end.removeEventListener('click', f);
		};
		end.addEventListener('click', f);
	});
}