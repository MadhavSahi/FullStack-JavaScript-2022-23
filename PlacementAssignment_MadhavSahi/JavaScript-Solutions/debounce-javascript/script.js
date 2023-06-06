
let counter =0;
function logdata(){
    console.log("Fxn Call - "+ counter++);
}

function debouncedFxn(fxn,time){
    let timer;
    return function(...args){
        if(timer){
            clearTimeout(timer);
        }
        setTimeout(()=>{
            fxn();
        },time)
    }
}
const debounce=debouncedFxn(logdata,2000);