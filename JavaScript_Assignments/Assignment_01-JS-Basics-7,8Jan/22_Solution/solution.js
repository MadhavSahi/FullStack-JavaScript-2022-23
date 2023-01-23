const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let newarray=ages.sort();
console.log(newarray);
// console.log(ages);
let len=newarray.length; //10
let mid1=len/2;
let mid2= len/2 +1;
console.log("Minimum age is : " + newarray[0]);
console.log("Maximum age is : " + newarray[len-1]);
console.log("Median age is : " +  (newarray[mid1] + newarray[mid2])/2);
let ans=0;
for(x of newarray){
    ans=ans+x;
}
let averageage=ans/len;
console.log("Average age is : " + averageage);
let range=newarray[len-1] - newarray[0];
console.log("Range of age is : " + range );

let minaverage = Math.abs(newarray[0] - averageage);
let maxaverage = newarray[len-1] - averageage;
console.log("Min-Average is : " + minaverage);
console.log("Max-Average is : " + maxaverage);
if(maxaverage>minaverage){
    console.log("Max - average is big");
}
else{
    console.log("Min - average is big");
}