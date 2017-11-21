var body = document.getElementsByTagName('body')[0];
var xhr = new XMLHttpRequest();
xhr.open("GET", "zagruzka.json", true);
xhr.onload = function(){
	console.log(this.responseText);
	var data = JSON.parse(this.responseText);
	console.log(data);
	var addImages = function(){
		data.forEach(function(elem){
			var div = document.createElement("div");
			var img = document.createElement("img");
			img.style.height = "700px";
			img.style.width = "1200px"
			img.setAttribute("src", elem.img);
			div.appendChild(img);
			body.appendChild(div);
		});
	}
	addImages();
	body.addEventListener("mousewheel", function(){
		console.log(this.lastChild.getBoundingClientRect().bottom);
		console.log(window.innerHeight);
		if(this.lastChild.previousElementSibling.getBoundingClientRect().bottom < window.innerHeight){
			addImages();
		}
	});
}
xhr.send();