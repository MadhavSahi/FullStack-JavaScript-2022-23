let arr1;

fun=(month)=>{
    if(month=='September' || month=='October' || month=='November'){
        console.log("Month is Autumn");
    }
    else if(month=='December' || month=='January' || month=='February'){
        console.log("Month is Winter");
    }
    else if(month=='March' || month=='April' || month=='May'){
        console.log("Month is Spring");
    }
    else{
        console.log("Month is Summer");
    }
}
let season=fun('April');