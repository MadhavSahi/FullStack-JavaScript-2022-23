// arrays in depth
//  for of loop

let array1=['Madhav',"madhav sahi",3,"Madhav Sahi",'Sahi','madhav'];
console.log(array1); // show array
console.log(array1.length); //size of array
console.log(array1[array1.length-1]); // to access last element of array

//push - to insert new values at end of array
// console.log()

//slice - it will cut the array
// it will make a new array and won't change the existing array
console.log(array1.slice(2,4)); // the 2nd value is excluded..means it will take value till index 4-1=3;
array2=array1.slice(2,4);
console.log(array1);
console.log(array2);

//splice
// it will add the new vaues inside that array and update that array
console.log("now");
let array3=['Madhav',"madhav sahi",9,22,"Madhav Sahi",'Sahi','madhav'];
let array4=['Madhav',"madhav sahi",9,22,"Madhav Sahi",'Sahi','madhav'];
console.log(array3);
console.log(array4);
array3.splice(1,0,"hello","hi");//it will add the value before 1st index..and won;t delete any value
array4.splice(1,1,"hello","hi");// it will add the values before 1st index...and delete 1 item next
console.log(array3);
console.log(array4);

//concat
let array5=['Madhav',"madhav sahi",9,22,"Madhav Sahi",'Sahi','madhav'];
let array6=[1,2,3,4,5,6,7,8,9];
array7=array5.concat(array6);//it will make a new array...it won;t update the existing array
console.log(array7);
console.log(array5);
console.log(array6);

//include
// returns boolean
let array8=['Madhav',"madhav sahi",9,22,"Madhav Sahi",'Sahi','madhav'];
console.log(array8.includes(9,2)); // it checks whethere 9 i present at index 2 or not..it returns boolean
console.log(array8.includes(9,3)); // it checks whethere 9 i present at index 3 or not..it returns boolean

// indexOf()
// it will find the index of that value inside the array
let array9=['Madhav',"madhav sahi",9,22,"Madhav Sahi",'Sahi','madhav'];
console.log(array9.indexOf("Madhav")); // it will return 0;
console.log(array9.indexOf("Madhavs")); // it will return -1 when not found;


// Array.isArray(arrayname)
// it will check whether the variable is Array or Not...it returns boolean

let madhav=9;
console.log(Array.isArray(array3)); // it will return true becuase array3 is an array
console.log(Array.isArray(madhav)); // it will return false becuase madhav is not an array


// map -- important
// it will map all the values of that array with a function
// it is used to mainpulate all the values inside that array
// it won't change the original array
let array10=[1,4,9,16,25,36,49,64];
console.log(array10.map(Math.sqrt));


//pop
// it will remove the last element from the array
// it will modify the array
// it returns the lat value of array
let array11=[1,2,3,4,5,6,7];
let x=array11.pop();
console.log(x);
console.log(array11);

//shift
// it will remove the last element from the array
// it will modify the array
// it will return the first value of array
let array12=[1,2,3,4,5,6,7];
let y=array12.shift();
console.log(y);
console.log(array12);

// split
// it will convert string into array
let names="Madhav";
let array13=names.split('');
console.log(array13);

// for of loop
// designed for arrays only
// used to iterate over an array to take variables
// Direct access of object is given without using index and reassasing the original main array 
let array14=['Madhav',"0",'Sahi','madhav','sahi','madhAV'];
let array15=[];
for(let item of array14) // item will be values of array
{
    console.log(item);
    array15.push(item.toUpperCase()); // it will throw error when array contains integer...
                                      // so if numbers are there..use "" on them
}
console.log(array15);

//reverse
// it will reverse the array
let array16 = [1, 4, 9, 16, 25];
console.log(array16.reverse());

// unShift
// it will add values in front
// it will modify the array
let array17 = ['Apple', 'Bada Apple', 'Chota Apple', 'Double Apple'];
array17.unshift('Apple 1', 'Grapes 2');
console.log(array17);

//lastIndexOf
// -- it will return the last index of a value find in array    
let array18 = [1, 2, 3, 'Madhav', 4, 5, 6, 7, 8, 'Madhav', 'Madhav'];
let xyz=array18.lastIndexOf('Madhav');
console.log(xyz);

//join
let array19 = [1, 2, 3, 4, 5, 6, 7];
let variable = array19.join('');// it will make variable as string

console.log(variable);
variable=variable+1; // it will be string..so 1 will get placed at end
console.log(variable);
console.log(array19); // oroginal array will remain as it is
console.log(typeof(variable)); // confirming that it is string

//fill
let array20 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array20.fill('Madhav', 2, 1);
console.log(array20);

