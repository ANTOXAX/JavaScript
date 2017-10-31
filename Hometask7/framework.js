var D = {
	append: function(e,e2){
		e.appendChild(e2);
	},

	prepend: function(e,e2){
		e.insertBefore(e2);
	},

	remove: function(e){
		e.remove();
	},

	create: function(tag){
		return document.createElement(tag);
	},

	Get: {
		byId: function(id){
			return document.getElementById(id);
		},

		byclass: function(cl){
			return document.getElementsByClassName(cl);
		},

		byTag: function(tag){
			return document.getElementsByTagName(tag);
		},

		byName: function(name){
			return document.getElementsByName(name);
		},

		bySelector: function(s){
			return document.querySelector(s);
		},

		bySelectorAll: function(s){
			return document.querySelectorAll(s);
		},
	},

	Event:{
		add: function(type, elem, f){
			if (elem.addEventListener) elem.addEventListener(type, f);//W3C
			else if (elem.attachEvent) elem.attachEvent("on"+type, f);//IE 8<
		},

		remove: function(type, elem, f){
			if (elem.removeEventListener) elem.removeEventListener(type, f);//W3C
			else if (elem.detachEvent) elem.detachEvent("on"+type, f);//IE 8<
		},

		dispatch: function(type, elem, f){
			if (elem.dispatchEventListener) elem.dispatchEventListener(new Event(type));//W3C
			else if (elem.fireEvent) elem.fireEvent("on"+type, new Event(type));//IE 8<
		},
	}
};

var S = {
	width: function(el) {
		var r = el.getBoundingClientRect();
		return r.weight;
	},

	height: function(el) {
		var r = el.getBoundingClientRect();
		return r.height;
	},

	pageTop: function(el) {
		var r = el.getBoundingClientRect();
		return r.top;
	},

	pageLeft: function(el) {
		var r = el.getBoundingClientRect();
		return r.left;
	},

	css: function(el, prop[,val]){
		el.style.prop = 'val';
	}
}