var num = prompt("Enter telephone number");
var arrnum = num.match(/^\+(375)\s[\(]?(33|25|29|44)[\)]?\s(\d\d\d)-(\d\d)-(\d\d)$/);
if (arrnum != null)  console.log(arrnum[1]+arrnum[2]+arrnum[3]+arrnum[4]+arrnum[5]);
else console.log("This number does not exist.");
