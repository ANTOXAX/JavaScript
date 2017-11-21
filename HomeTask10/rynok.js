var indent = 0
function Tovar(n, t, c, d){
	this.ident = ++indent;
	this.name = n;
	this.type = t;
	this.cost = c;
	this.date = new Date(d);
}

function prodTovar(n, t, c ,d, g){
	console.log(d.toString());
	Tovar.apply(this, arguments);
	this.goden = new Date(g)
	Object.defineProperty(this, 'srok', {
		get: function(){
			return (this.goden - this.date)/3600000;
		}
	})
}

function store(n1, adr, tovs, nacenka, profit){
	console.log(this.tovs);
	this.sname = n1;
	this.adress = adr;
	this.tovs = tovs;
	this.nacenka = nacenka;
	this.profit = profit;
	var sum = 0;
	this.tovs.forEach(function(elem){
		sum += elem.cost;
	});
	this.sum = sum;
	this.add = function(t, n){
		for (var i = 0; i < n; i++) tovs.push(t);
		}
	this.del = function(t, n){
		var i = 0;
		while (i < n){
			tovs.forEach(function(elem){
				if (elem == t){
					delete elem;
					i++;
					return;
				}
			})
		}
	};
	this.sell = function(t, n){
		var i = 0;
		while (i < n){
			tovs.forEach(function(elem){
				if (elem == t){
					sum -= t.cost;
					delete elem;
					i++;
					return;
				}
			})
		}
	};
	this.sinfo = function(){
		document.write('Inforamtion about' + this.name + 'store');
		document.write(this.sname + '\n');
		document.write(this.adress + '\n');
		document.write(this.tovs.join(', ') + '\n');
		document.write(this.sum + '\n');
		document.write(this.nacenka + '\n');
		document.write(this.profit + '\n');
	}
}