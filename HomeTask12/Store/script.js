var xhr = new XMLHttpRequest();
xhr.open('GET', 'store.json', true);
xhr.onload = function(){
	var store = JSON.parse(this.responseText);
	console.log(store);
	var ul = document.getElementById('ul');
	ul.innerHTML += '<li>'+Object.keys(store)[0]+'</li> <ul class = "closed"></ul> <li>'+Object.keys(store)[1]+'</li> <ul class = "closed"></ul> <li>'+Object.keys(store)[2]+'</li> <ul class = "closed"></ul>';
	store.Sport.forEach(function(elem){
		ul.children[1].innerHTML += '<li>'+elem.title+'</li> <ul><li>'+elem.price+'</li> <li>'+elem.country+'</li> <li><button type = "button" class = "plus">+</button> <span class = "input"></span> <button type = "button" class = "minus">-</button> <button type = "button" class = "cart">To cart</button></ul></li></ul>';
	});
	store.Food.forEach(function(elem){
		ul.children[3].innerHTML += '<li>'+elem.title+'</li> <ul><li>'+elem.price+'</li> <li>'+elem.country+'</li> <li><button type = "button" class = "plus">+</button> <span class = "input"></span> <button type = "button" class = "minus">-</button> <button type = "button" class = "cart">To cart</button></ul></li></ul>';
	});
	store.Electric.forEach(function(elem){
		ul.children[5].innerHTML += '<li>'+elem.title+'</li> <ul><li>'+elem.price+'</li> <li>'+elem.country+'</li> <li><button type = "button" class = "plus">+</button> <span class = "input"></span> <button type = "button" class = "minus">-</button> <button type = "button" class = "cart">To cart</button></ul></li></ul>';
	})
	for (var i = 0; i < 5; i += 2){
		ul.children[i].addEventListener('click', function(e){
			this.nextElementSibling.classList.toggle('closed');
		})
	}
}
xhr.send(null);

// <li><button type = "button" class = "plus">+</button> <span class = "input"></span> <button type = "button" class = "minus">-</button> <button type = "button" class = "cart">To cart</button></li>