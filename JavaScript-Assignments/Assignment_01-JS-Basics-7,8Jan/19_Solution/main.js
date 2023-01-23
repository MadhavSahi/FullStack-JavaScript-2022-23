// import {countries} from "./countries.js";
// import {webstacks} from "./web_techs.js";

file1=require("./countries.js");
file2=require("./web_techs.js");

console.log(file1.countries);
console.log(file2.webstacks);

console.log("We have exported " + file1.countries[2] +" from countries.js file and exported "+file2.webstacks[3] +
" from webs_techs file using Require syntax" );