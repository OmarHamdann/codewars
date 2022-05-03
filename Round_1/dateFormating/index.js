// function dateFormating(date) {
	
//     var day = date.getDate();
//     var month = date.getMonth() + 1;
//     var year = date.getFullYear();
    
//     if (day < 10) {
//         day = "0" + day;
//     }
    
//     if (month < 10) {
//         month = "0" + month;
//     }
    
//     return day + "/" + month + "/" + year;
// }

function dateFormating(date) {
	return date.split("-").reverse().join('-');
    
}
console.log(dateFormating("2020-02-10"));