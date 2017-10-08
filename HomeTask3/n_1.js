var N = ["John", "Ted", "Barney", "Susan", "Robin", "Lili", "Tracey"];
var M = ["New-York", "Washington", "Las-Venturas", "San-Diego", "San-Fierro"];
var People = [];
for (i = 0; i < N.length; i++){
	var Human = new Object();
	People[i] = Human;
	Human.name = N[Math.floor(Math.random()*N.length)];
	Human.city = M[Math.floor(Math.random()*M.length)];
	Human.age = Math.floor(Math.random()*100);
	Human.print = function(){
		console.log("Name: "+Human.name+" Age: "+Human.age+" City: "+Human.city);
	}
}
People.sort(function sort(h1,h2){
	return h1.age-h2.age;
});
People.reverse();
console.log(People);