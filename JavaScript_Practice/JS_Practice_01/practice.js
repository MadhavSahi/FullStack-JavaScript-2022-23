
var grab1=document.querySelector("body");
var grab2=document.querySelector(".first");
console.log(grab1);

let bgcolorpicker=(pickedelement)=>{
        return window.getComputedStyle(pickedelement).backgroundColor;
    }

grab1.addEventListener("click",()=>{
     grab1.style.backgroundColor=bgcolorpicker(grab2);
})
// prompt("whta the answer");
// confirm("sdsd");
// alert("dsd");

// var ele1 = document.querySelector(".first");
