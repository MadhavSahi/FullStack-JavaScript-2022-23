let filename="javascript.html";

fun=(file1)=>{
    let x = file1.lastIndexOf('.');
    let ans=file1.split(file1[x]);
    console.log("Extension of input file is : " + ans[ans.length-1]);
}

fun(filename);