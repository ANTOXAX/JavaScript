var f_t_m = [
{
	type: 'folder',
	title: 'New folder',
	items: [{type: 'txt', title: 'text', items: 'text'}]
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
}
];
var m = document.getElementById('spis');
var items;
var title;
var items1;

function fm(f_t_m, title, m,  items, items1){
	f_t_m.forEach(function(s){
		f_t_m = s;
		title = document.createElement('li');
		m.appendChild(title); //<li>
		title.setAttribute('type', 'disc');
		title.textContent = f_t_m.title;
		items = document.createElement('ul');
		m.appendChild(items);
		if (f_t_m.type = 'folder') fm(f_t_m, title, m, items, items1);
		else {
			title = document.createElement('li');
			items.appendChild(title);
			title.setAttribute('type', 'circle');
			title.textContent = f_t_m.title;
			items1 = document.createElement('ul');
			items.appendChild(items1); //<ul>
			text = document.createElement('textarea'); //<textarea>
			items1.appendChild(text);
			text.textContent = f_t_m.items;
		}
	});
}

fm(f_t_m, title, m, items, items1);

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