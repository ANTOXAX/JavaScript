var txt = document.getElementById('txt');
var info = document.getElementById('info');
var b = document.getElementById('b');
var i = document.getElementById('i');
var u = document.getElementById('u');
txt.contentEditable = true;
//document.execCommand(command, false, data);
b.addEventListener('click', function(){
	txt.focus();
	document.execCommand('bold', false, null);
	this.classList.toggle('on');
});

i.addEventListener('click', function(){
	document.execCommand('italic', false, null);
})

u.addEventListener('click', function(){
	document.execCommand('underline', false, null);
})

txt.addEventListener('input', function(){
	if (document.queryCommandEnbled('bold') == false) 
})