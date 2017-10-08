function EndTime(){
	var TimeNow = Date.now();
	var DayEnd = new Date();
	DayEnd.setHours(23,59,59,59);
	return Math.round((DayEnd.getTime() - TimeNow)/60000);
}
console.log(EndTime());