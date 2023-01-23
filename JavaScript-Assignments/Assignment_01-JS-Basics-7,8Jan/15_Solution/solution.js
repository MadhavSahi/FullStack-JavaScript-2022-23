// 80-100, A
// 70-79, B
// 60-69, C
// 50-59, D
// 0-49, F
let markss=70;

fun=(marks)=>{
    if(marks>=80 && marks<=100){
        console.log("Grade is A");
    }
    else if(marks>=70 && marks<=79){
        console.log("Grade is B");
    }
    else if(marks>=60 && marks<=69){
        console.log("Grade is C");
    }
    else if(marks>=70 && marks<=79){
        console.log("Grade is D");
    }
    else{
        console.log("Grade is F");
    }
}
fun(markss);

