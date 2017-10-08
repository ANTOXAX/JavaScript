var Bookkeeping = {};
var Employees = [
{
	name: "Ted",
	age: 40,
	department: "1",
	experience:36,
	salary: 4000
},
{
	name: "Lili",
	age: 25,
	department: "2",
	experience:8,
	salary: 1500
},
{
	name: "Barney",
	age: 30,
	department: "3",
	experience: 12,
	salary: 2000
}
]	
console.log(Employees);
Bookkeeping.employees = Employees;
Bookkeeping.HireOrFire = function(p){
	if (typeof(p) == "object" && p != null){
		Bookkeeping.employees[Bookkeeping.employees.length] = p;
		console.log(Bookkeeping);
    }
    if (typeof(p) == "string"){
    	Bookkeeping.employees = Bookkeeping.employees.filter(function(elem){
    		return elem.name != p;
    	})
    	console.log(Bookkeeping);
    }
}
Bookkeeping.HireOrFire("Barney");
//var a ={};
//Bookkeeping.HireOrFire(a);