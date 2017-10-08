var x = prompt("Enter x: ");
var arr = [1, 2, 3, 4, 5, 6, 7];
function mnogochlen(arr, x){
	var sum = 0;
	for(var i = 0; i < arr.length; i++){
		sum += arr[i]*Math.pow(x,i);
	}
	return x = sum;
}
alert(mnogochlen(arr, x));