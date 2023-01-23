let weight=80;//in KG
let height=100;//in metre

let bmiheight=height*height;
bmi=(h,w)=>{
    let res=w/h;
    if(res<18.5){
        console.log("Person is UNDERWEIGHT");
    }
    else if(res>=18.5 && res<=24.9){
        console.log("Person is NORMAL WEIGHT");
    }
    else if(res>=25 && res<=29.9){
        console.log("Person is OVER WEIGHT");
    }
    else{
        console.log("Person is OBESE");
    }
}
bmi(bmiheight,weight);