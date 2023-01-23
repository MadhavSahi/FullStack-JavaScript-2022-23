var div=document.querySelector(".first");
var ullist=window.document.querySelector(".first-1");
// console.log(ullist);
var neww=document.createElement("li");

// creating a new element using DOM
neww.className="new";
neww.textContent="Hello world"; 
//textContent is a part of Node object, this is the standardized version of What you see what u get. If there were extra spaces in the content or the styles 
//  that would have been not grabbed as a part of innerText but it will come with the output of textContent.
//  - So textContent is somewhat more good than innerHTML or innerText.
neww.style.color="black";
neww.style.fontSize="25px";
// console.log(neww);
window.document.body.appendChild(neww);// if u want to append in body then follow this syntax
// ullist.appendChild(neww);//if u want to append in already created tag..then use this syntax
// div.appendChild(neww);
// var ans=window.getComputedStyle(ullist).fontFamily;
// console.log(ans);
// console.log(document.body);