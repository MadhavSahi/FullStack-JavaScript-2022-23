var ul=document.querySelector(".second");

var div=document.querySelector(".first");
//creating and appending HTML elements using DOM.
var li=document.createElement("li");
div.appendChild(li);
// ul.appendChild(li);
li.className="hello";
li.style.backgroundColor="grey";
li.style.color="purple";
li.style.fontSize="50px";
li.textContent="Hello world";
div.removeChild(ul);// to remove HTML element 
// document.body.removeChild(div);