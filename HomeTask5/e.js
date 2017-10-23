var num = prompt("Enter amount of numbers: ");
var n = Math.round(Math.sqrt(num));
var tbody = document.getElementById('tbody');
var id;
var id1;
var tr ='';
for (var i = 0; i < n; i++){
	tr += "<tr>"
	for (var k = 0; k < n; k++){
		id = n*i+k+1;
		tr += "<td id = '"+id+"'>"+id+"</td>";
	}
	tr += "</tr>";
}

tbody.innerHTML = tr;

var p=2, i = 1;

setInterval(function(){
	if (p <= n * n){
		if ((p+i) % p == 0){

			id1 = document.getElementById(p+i);
			id1.setAttribute("class","emphasized");
		}
		i++;
	}
	
	if (i >= n * n - p){
		p++;
		i = 1;
	}

},25);

setTimeout(function(){
	alert(i);
},2000)
