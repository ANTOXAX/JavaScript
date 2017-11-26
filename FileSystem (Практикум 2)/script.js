var xhr = new XMLHttpRequest();
xhr.open('GET', 'fs.json', true);
xhr.onload = function(){
	var fs = JSON.parse(this.responseText);
	var sel = document.getElementById('sel');
	var op1 = document.getElementById('op1');
	var op2 = document.getElementById('op2');
	var op3 = document.getElementById('op3');
	var op4 = document.getElementById('op4');
	var op5 = document.getElementById('op5');
	sel.style.display = 'block';
	var r = sel.getBoundingClientRect();
	var w = r.right-r.left;
	var h = r.bottom - r.top;
	sel.style.display = 'none';
	var fileS = function(elem, ul){
		elem.items.forEach(function(elem){
			if (elem.type == 'folder'){
				var li = document.createElement('li');
				li.setAttribute('type', 'disc');
				li.innerHTML = elem.title;
				ul.appendChild(li);
				ul = document.createElement('ul');
				li.appendChild(ul);
				fileS(elem, ul);
			}
			else{
				li = document.createElement('li');
				li.setAttribute('type', 'circle');
				li.innerHTML = elem.title;
				ul.appendChild(li);
				var xhr1 = new XMLHttpRequest()
				xhr1.open('GET', elem.adr, true);
				xhr1.onload = function(){
					li.setAttribute('size', elem.size);
					var div = document.createElement('div');
					div.innerHTML = this.responseText;
					div.classList.add('closed');
					var p = document.createElement('p');
					p.classList.add('closed');
					li.appendChild(p)
					p.appendChild(div);
				}
				xhr1.send(null);		
			} 
		});	
	}
	fs.forEach(function(elem){
		if (elem.type == 'file'){
			var ul = document.getElementById('ul');
			var li = document.createElement('li');
			ul.appendChild(li);
			li.setAttribute('type', 'circle');
			li.innerHTML = elem.title;
			var xhr1 = new XMLHttpRequest()
			xhr1.open('GET', elem.adr, true);
			xhr1.onload = function(){
				li.setAttribute('size', elem.size);
				var div = document.createElement('div');
				div.innerHTML = this.responseText;
				div.classList.add('closed');
				var p = document.createElement('p');
				p.classList.add('closed');
				li.appendChild(p)
				p.appendChild(div);
			}
			xhr1.send(null);
		}
		else{
			var ul = document.getElementById('ul');
			var li = document.createElement('li');
			li.setAttribute('type', 'disc');
			li.innerHTML = elem.title;
			ul.appendChild(li);
			ul = document.createElement('ul');
			li.appendChild(ul);
			fileS(elem, ul);
		}
	})

	var uls = document.getElementsByTagName('ul');
	for (var i = 1; i < uls.length; i++){
		uls[i].parentNode.addEventListener('click', function(e){
			e.stopPropagation();
			console.log(this.getAttribute('type'));
			if (e.target == this) this.firstElementChild.classList.toggle('closed');
		})
	}

	var lis = document.querySelectorAll('[type = "circle"]');
	for (var i = 0; i < lis.length; i++){
		lis[i].addEventListener('click', function(e){
			e.stopPropagation();
			this.firstElementChild.classList.toggle('closed');
			this.firstElementChild.firstElementChild.classList.toggle('closed');
		})
	}

	var liAll = document.getElementsByTagName('li');
	for (var i = 0; i < liAll.length; i++){
		liAll[i].addEventListener('contextmenu', function(e){
			e.preventDefault();
			e.stopPropagation();
			var x = e.clientX;
			var y = e.clientY;
			if (x + w > document.documentElement.clientWidth) x = x - w; 
			if (y + h > document.documentElement.clientHeight) y = y - h;
			sel.style.position = 'absolute';
			sel.style.top = y + 'px';
			sel.style.left = x + 'px';
			sel.style.display = 'block';
			var t = e.target;
			op1.onclick = function(){
				t.firstChild.data = prompt();
				op1.onclik = null;
			}
			op2.onclick = function(){
				t.remove();
			}
			op3.onclick = function(){
				var content = document.getElementsByClassName('content')[0];
				var wrapper = document.getElementsByClassName('wrapper')[0];
				var size = 0;
				var c = t.children[0].children;
				var sizes = function(){
					for (var i = 0; i < c.length; i++){
						if (c[i].getAttribute('type') == 'circle'){
							size += Number(c[i].getAttribute('size'));
						}
						else{
							size += 4096;
							c = c[i].children[0].children;
							console.log(c);
							sizes();
						}
					}
				}
				if (t.getAttribute('type') == 'circle') size = Number(t.getAttribute('size'));
				else{
					sizes();
				}	
				content.innerHTML = 'Properties:<br>Name: '+t.firstChild.data+'<br>Size: '+ size +' bytes';
				wrapper.setAttribute('class', 'wrapper open');
				wrapper.onclick = function(e){
					if(e.target == this) this.setAttribute('class', 'wrapper');
				}
			}
			op4.onclick = function(){
				if (t.getAttribute('type') == 'disc'){
					var li = document.createElement('li');
					li.setAttribute('type', 'disc');
					li.innerHTML = prompt('Enter folder name');
					t.children[0].appendChild(li);
					var ul = document.createElement('ul');
					li.appendChild(ul);
					uls = document.getElementsByTagName('ul');
					for (var i = 1; i < uls.length; i++){
						uls[i].parentNode.addEventListener('click', function(e){
							e.stopPropagation();
							if (e.target == this) this.firstElementChild.classList.toggle('closed');
						})
					}
				}
			}
			op5.onclick = function(){
				if (t.getAttribute('type') == 'disc'){
					var li = document.createElement('li');
					li.setAttribute('type', 'circle');
					li.innerHTML = prompt('Enter file name');
					t.children[0].appendChild(li);
				}
			}
			document.documentElement.addEventListener("click", function(){
				sel.style.display = 'none';
			});
		})
	}
}
xhr.send(null);