var indent = 1
function tovar(n, t, c, d){
	this.ident = indent;
	this.name = n;
	this.type = t;
	this.cost = c;
	this.date = Date.parse(d);
	function prodtovar(goden){
		tovar(n, t, c, d);
		this.goden = Date.parse(goden);
		this.sh = (this.goden - Date.parse(d));
		Object.defineProperty(obj1, "prop", {
  			writable: false,
  			configurable: false,
  			enumerable: false
		})
	indent += 1;
	}
}

function store(n1, adr, tovs, nacenka){
	var profit = 0;
	this.sname = n1;
	this.adress = adr;
	this.tovs = tovs;
	this.nacenka = nacenka;
	this.profit = profit;
	var sum = 0;
	this.tovs.forEach(function(elem){
		sum += elem;
	})
	this.sum = sum;
	this.add = function(t, n){
		for (var i = 0; i < n; i++) tovs.push('t');
		}
	this.spis = function(t, n){
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
					profit = t.cost*nacenka/100;
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