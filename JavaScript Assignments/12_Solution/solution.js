const datee=new Date;

let date=datee.getDate();
let year=datee.getFullYear();
let month=datee.getMonth()+1;
let hours=datee.getHours();
let mins=datee.getMinutes();

console.log(year + "-" + month + "-" + date + " " + hours + ":" + mins ); //format YYYY-MM-DD HH:mm
console.log(date + "-" + month + "-" + year + " " + hours + ":" + mins ); //format DD-MM-YYYY HH:mm
console.log(date + "/" + month + "/" + year + " " + hours + ":" + mins ); //format DD/MM/YYYY HH:mm
