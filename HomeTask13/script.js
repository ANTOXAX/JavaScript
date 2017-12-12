var txt = document.getElementById('txt');
var info = document.getElementById('info');
var b = document.getElementById('b');
var i = document.getElementById('i');
var u = document.getElementById('u');
var ltextsize = document.getElementById('ltextsize');
var textsize = document.getElementById('textsize');
textsize.value = 4;
var mtextsize = document.getElementById('mtextsize');
var ul = document.getElementById('ul');
var ol = document.getElementById('ol');
var line = document.getElementById('line');
var url = document.getElementById('URL');
var left = document.getElementById('left');
var centre = document.getElementById('centre');
var right = document.getElementById('right');
var indent = document.getElementById('indent');
var outdent = document.getElementById('outdent');
var format = document.getElementById('format');
var forecolor = document.getElementById('forecolor');
document.execCommand('fontsize', false, 5);
document.execCommand('fontsize', false, 4);
left.classList.add('on');
var on = function(elem, command){
	if (document.queryCommandState(command) == true){
		elem.classList.add('on');	
	}
	else elem.classList.remove('on');
}
txt.contentEditable = true;
//document.execCommand(command, false, data);
b.addEventListener('click', function(){
	txt.focus();
	document.execCommand('bold', false, null);
	this.classList.toggle('on');
});

i.addEventListener('click', function(){
	document.execCommand('italic', false, null);
	this.classList.toggle('on');
})

u.addEventListener('click', function(){
	document.execCommand('underline', false, null);
	this.classList.toggle('on');
})

ltextsize.onclick = function(){
	txt.focus();
	if (textsize.value > 1){
		textsize.value--;
		document.execCommand('fontsize', false, textsize.value);
	}
}

mtextsize.onclick = function(){
	txt.focus();
	if (textsize.value < 7){
		textsize.value++;
		document.execCommand('fontsize', false, textsize.value);
	}
}

textsize.onblur = function(){
	if (textsize.value < 1 || textsize.value > 7 || textsize.value*(-1) == NaN){
		if (document.queryCommandValue('fontsize') >= 1 && document.queryCommandValue('fontsize') <=7) textsize.value = document.queryCommandValue('fontsize');
		else textsize.value = 4;
		return;
	}
	document.execCommand('fontsize', false, textsize.value);
}

line.onclick = function(){
	txt.focus();
	document.execCommand('insertHorizontalRule', false, null);
}

ul.onclick = function(){
	txt.focus();
	document.execCommand('insertunorderedlist', false, null);
	this.classList.toggle('on');
}

ol.onclick = function(){
	txt.focus();
	document.execCommand('insertorderedlist', false, null);
	this.classList.toggle('on');
}

url.onclick = function(){
	document.execCommand('createlink', false, prompt('Введите URL'));
}

left.onclick = function(){
	document.execCommand('justifyleft', false, null);
	left.classList.add('on');
	centre.classList.remove('on');
	right.classList.remove('on');
}

centre.onclick = function(){
	document.execCommand('justifycenter', false, null);
	left.classList.remove('on');
	centre.classList.add('on');
	right.classList.remove('on');
}

right.onclick = function(){
	document.execCommand('justifyright', false, null);
	left.classList.remove('on');
	centre.classList.remove('on');
	right.classList.add('on');
}

indent.onclick = function(){
	document.execCommand('indent', false, null);
}

outdent.onclick = function(){
	document.execCommand('outdent', false, null);
}

format.onclick = function(){
	document.execCommand('removeformat', false, null);
}

txt.addEventListener('input', function(){
	on(b, 'bold');
	on(i, 'italic');
	on(u, 'underline');
});