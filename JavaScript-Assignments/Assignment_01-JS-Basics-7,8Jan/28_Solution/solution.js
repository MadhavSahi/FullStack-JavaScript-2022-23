let input=3;
//a
let str1="";
for(let i=1;i<=input;i++){    
    for(let j=0;j<i;j++){
        str1+="*";        
    }
    str1+="\n";
}
console.log(str1);

//b
let str2="";
for(let i=1;i<=input;i++){
    for(let i=1;i<=input;i++){
        // str2+="\n";
        str2+="*";
    }
    str2+="\n"
}
console.log(str2);