const datee= new Date;
console.log(datee.getFullYear());
console.log(datee.getMonth()+1);
console.log(datee.getDate());
console.log(datee.getDay());
console.log(datee.getHours());
console.log(datee.getMinutes());
console.log(datee.valueOf()/1000); // returns seconds elapsed since epoch(1 Jan 1970)
console.log(datee.getTime()/1000); // returns seconds elapsed since epoch(1 Jan 1970)
