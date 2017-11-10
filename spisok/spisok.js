var f_t_m = [
{
	type: 'folder',
	title: 'New folder',
	items: [{type: 'txt', title: 'text', items: 'text'}]
},
{
	type: 'txt',
	title: 'test',
	items: 'check'
},
{
	type: 'folder',
	title: 'New folder 1',
	items: [{type: 'folder', title: 'documents', items: [{type: 'txt', title: 'document1', items: 'Email'}, {type: 'txt', title: 'document2', items: 'Password'}]}]
},
{
	type: 'txt',
	title: 'argues',
	items: 'Congratulations!!'
},
{
	type: 'txt',
	title: 'pls',
	items: 'okay'
}
];
var m = document.getElementById('spis');
var items;
var title;
var items1;

function fm(s, title, m,  items, items1){
		s.items.forEach(function(p){
			s = p;
			if (s.type == 'folder'){
				title = document.createElement('li');
				items.appendChild(title); //<li>
				title.setAttribute('type', 'disc');
				title.textContent = s.title;
				items = document.createElement('ul');
				title.appendChild(items);
				if (s.type == 'folder') fm(s, title, m, items, items1);
			}
			else {
				title = document.createElement('li');
				items.appendChild(title);
				title.setAttribute('type', 'circle');
				title.textContent = s.title;
				items1 = document.createElement('ul');
				items.appendChild(items1); //<ul>
				text = document.createElement('textarea'); //<textarea>
				items1.appendChild(text);
				text.textContent = s.items;
				//text.classList.add('closed');
			}
		});
}

f_t_m.forEach(function(s){
	if (s.type == 'folder'){
		title = document.createElement('li');
		m.appendChild(title); //<li>
		title.setAttribute('type', 'disc');
		title.textContent = s.title;
		items = document.createElement('ul');
		title.appendChild(items);
		fm(s, title, m, items, items1);
	}
	else{
		title = document.createElement('li');
		m.appendChild(title);
		title.setAttribute('type', 'circle');
		title.textContent = s.title;
		items = document.createElement('ul');
		title.appendChild(items); //<ul>
		text = document.createElement('textarea'); //<textarea>
		items.appendChild(text);
		text.textContent = s.items;
	}
})

spis.addEventListener('click', function(e){
	console.log(e);
	console.log(e.target.parentElement);
	console.log(e.target.nextElementSibling);
	if ((e.target.parentElement.id != 'spis') && (e.target.type = 'circle')) e.target.nextElementSibling.classList.toggle('closed');
	else e.target.firstElementChild.classList.toggle('closed');
})
/*f_t_m.forEach(function(s){
	if (s.type = 'folder'){
		f_t_m = s;
		title = document.createElement('li');
		m.appendChild(title); //<li>
		title.setAttribute('type', 'disc');
		title.textContent = f_t_m.title;
		items = document.createElement('ul');
		m.appendChild(items);
		fm(f_t_m, title, items, items1);
	}	
	else{
		title = document.createElement('li');
		items.appendChild(title);
		title.setAttribute('type', 'circle');
		title.textContent = s.title;
		items1 = document.createElement('ul');
		items.appendChild(items1); //<ul>
		text = document.createElement('textarea'); //<textarea>
		items1.appendChild(text);
		text.textContent = s.items;
	}
});*/