//logic for color maker hex code

getbgcolor=()=>{
    const arr=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];//16 size
    let color='#';
    for(let i=0;i<6;i++){
        color=color+arr[Math.floor(Math.random()*16)];
    }
    return color;
}
// newtext=()=>{
//     var newarr=["Hi how are you Baby🤭","Kkrh🤨","Bigg Boss Dekh rhi ho 😛😏?","Hmmm 😂","Dinner krliya 😋 ?","Logout krdo baby😣","sd"]
//     // for(let i=0;i<6;i++){
//         textt=newarr[Math.floor(Math.random()*6)];
//     // }
//     return textt;
// }
// var neww=document.querySelector(".newww");
// neww.style.color="pink";
var button=document.querySelector(".btn");

button.addEventListener('click',()=>{
    document.body.style.backgroundColor=getbgcolor();
    button.style.backgroundColor=getbgcolor();
    button.style.color=getbgcolor();
    // button.innerText="Hey";
    // neww.innerText=newtext();
    // neww.style.color=getbgcolor();
    // document.body.appendChild(neww);

})
button.addEventListener('mouseenter',()=>{
    // document.body.style.backgroundColor=getbgcolor();
    // button.style.backgroundColor=getbgcolor();
    // // button.style.bac=getbgcolor();
    // button.innerText="";

})
