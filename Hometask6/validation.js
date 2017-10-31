var iname = document.getElementById('name');
var tel = document.getElementById('tel');
var email = document.getElementById('email');
var site = document.getElementById('site');
var age = document.getElementById('age');
var n = document.getElementById('n');
var t = document.getElementById('t');
var btn = document.getElementById('btn');

iname.addEventListener('input', function(){
		if ((/^[a-zA-Z\-\ ]{3,20}$/).test(iname.value) == false) n.setAttribute('class', 'wrong');
		else n.setAttribute('class', 'clear');
})

tel.addEventListener('input', function(){
	if ((/^\+375\s[\(]?(33|25|29|44)[\)]?\s\d\d\d-\d\d-\d\d$/).test(tel.value) == false) t.setAttribute('class', 'wrong');
	else t.setAttribute('class', 'clear');
})

email.addEventListener('input', function(){
	if ((/^[0-9A-Za-z]{1}[-0-9A-z\.]+[0-9A-Za-z]{1}\@[-0-9A-Za-z]+\.[-A-Za-z]{2,4}$/).test(email.value)  == false) e.setAttribute('class', 'wrong');
	else e.setAttribute('class', 'clear');
})

site.addEventListener('input', function(){
	if ((/^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w!@#$%^&*()-_=+\.]*)*\/?$/).test(site.value) == false) s.setAttribute('class','wrong');
	else s.setAttribute('class','clear');
})

age.addEventListener('input', function(){
	if ((Number(age.value) < 3) || (Number(age.value) > 99)) a.setAttribute('class','wrong');
	else a.setAttribute('class', 'clear');
	})

btn.addEventListener('click', function(){
	if ((n.getAttribute('class') == 'clear') && (t.getAttribute('class') == 'clear') && (e.getAttribute('class') == 'clear') && (s.getAttribute('class') == 'clear') && (a.getAttribute('class') == 'clear')) alert('Validation successful!');
	else alert('Validation failed!');
})