var inp = document.getElementById('in');
//var iname = (/[a-zA-Z0-9\@\-\_\.]?/);
inp.addEventListener('keypress', function(e){
	//console.log(iname.test(inp.value));
	console.log(e);
	if(((e.keyCode >= 48) && (e.keyCode <= 57)) || (e.keyCode == 64) || (e.keyCode == 45) || (e.keyCode == 46) || ((e.keyCode >= 65) && (e.keyCode <= 90)) || (e.keyCode == 95) || ((e.keyCode >= 97) && (e.keyCode <= 122))){
		this.value += e.key;
	}
	e.preventDefault();
})