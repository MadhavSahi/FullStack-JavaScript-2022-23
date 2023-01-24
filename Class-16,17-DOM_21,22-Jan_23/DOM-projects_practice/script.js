//we are creating buttons and divs here only..not in HTML
var button1=document.createElement("button");
var button2=document.createElement("button");
var div=document.createElement("div");
div.className="div";
button1.className="button1";
button2.className="button2";
div.className="first";
button1.innerText="CLICK ANYWHERE To GENERATE NEW EMOJI";
button2.innerText="CLICK HERE To RELOAD PAGE";

//we are appending the buttons and divs here.
document.body.appendChild(div);
div.appendChild(button1);
div.appendChild(button2);

//we are selecting the elements for targetting here
var btn1=document.querySelector(".button1");
var btn2=document.querySelector(".button2");
var wholebody=document.querySelector("body");

//logic to select a random emoji.
generate=()=>{
    const arr=['😘','💋','❤','🤭','🤣','😏','🤨','😛','😂','😋','😁','😣','😍','👌','💕','🤭','💖','😜'];
    var text='';
    for(let i=0;i<arr.length;i++){
        text=arr[Math.floor(Math.random()*arr.length)];
    }
    return text;
};

//adding an event to the whole body.
// one check is that when doing DOM Manipulation for creating elements...it will take only a specific part where we are making that element and whole other screen is empty....but if there is already something present on screen than whole body from that present element is taken.
wholebody.addEventListener('click',(e)=>{
    var neww=document.createElement("p");
    neww.className="hello";
    // var x=e.clientX;
    // var y=e.clientY;
    // neww.style.left=x+"px";
    neww.style.left=`${e.clientX}px`;
    // neww.style.top=y+"px";
    neww.style.top=`${e.clientY}px`;
    document.body.appendChild(neww);
    neww.innerText=generate();
    
    //to vanish that emoji after 1 second.
    // setTimeout(()=>{
    //     neww.innerText="";
    // },1000);
})

//making a button to reload the whole page
btn2.addEventListener('click',()=>{
    location.reload();
})