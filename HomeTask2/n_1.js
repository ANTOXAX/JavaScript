function GenArr(N, s, p){
	var arr = [];
	var max = s + s*p/100;
	var min = s - s*p/100;
	for (i = 0; i<N; i++){
		arr[i] = (min + Math.random()*(max-min)).toFixed(2);
	}
	return arr;
}
function sort(f,s){
	return f-s;
}
var arr = GenArr(5, 100, 20);
arr.sort(sort);
alert(arr);
var sum = 0;
for (i = 0; i<arr.length;i++ ){
	sum += Number(arr[i]);
}
alert((sum/arr.length).toFixed(2));