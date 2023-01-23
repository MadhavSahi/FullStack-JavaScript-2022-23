var button=document.querySelector(".button");

//logic to get HEX value of random color
colorchanger=()=>{
    const arr='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
        color=color+arr[Math.floor(Math.random()*16)];
    }
    return color;
}

button.addEventListener('click',()=>{
    document.body.style.backgroundColor=colorchanger();
    button.style.backgroundColor=colorchanger();
})