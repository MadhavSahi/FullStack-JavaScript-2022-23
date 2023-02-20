const text=document.getElementsByClassName("text");
const coname=document.getElementsByClassName("coname-v");
const sname=document.getElementsByClassName("sname-v");
const cname=document.getElementsByClassName("ciname-v");
const hdity=document.getElementsByClassName("humidity-v");
const wspeed=document.getElementsByClassName("windspeed-v");
const temp=document.getElementsByClassName("temp-v");
const imglogo=document.getElementsByClassName("img");
const imgtext=document.getElementsByClassName("img-v");

// console.log(text);
const search=async (e)=>{
    //basically we don't want to submit the form...we just want that on click of button it should display the values from API...so we have to use preventDefault()...otherwise it will submit the values and the page will be reloaded and we won't be able to see the values.
    e.preventDefault();//this is used to prevent default action should not happen.
    //if we r not using this then it's not printing the data.
    //Every item in the DOM has some 'default behaviour'. This is for every browser about the same (some exceptions excluded). If you want your own logic to be executed instead of the default behavior, you can use the preventDefault() function. The same goes for the stopPropagation() function which stopt events from bubbling up the event tree if you just want your own logic being executed and nothing else from there on.
    if(!text[0].value){
        alert("Enter city plz");
        return;
    }
    const cityname=text[0].value;
    //value is for the text which we will enter..so we have to grab it using DOM.
    console.log(cityname);
    const datafetch=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=f5e36e01d13c473c836173105231802&q=${cityname}`);
    const data=await datafetch.json();
    //see this is now compulsory to add await on both of the lines bcz think as of then then catch block....
    // it's necessary to add otherwise it will show as promise pending.
    // and if we don;t use async await on whole...then it's throwing error...
    // so when using fetch..we have to use async await await...it's a template...it's promise thing
    // we are seeing the use case scenario of promise...we can also do with fetch(url).then().then().catch();
    //..but we are doing with async await await
    // when we have to use fetch/API req..then async await await are used compulsory
    console.log(data.forecast.forecastday[0].date);

    //I was just writing logic for if we don't find a valid city.
    // if(data){
    //     alert("plz enter a valid city");
    //     return;
    // }
    // console.log(e.currentTarget.name.value);
    coname[0].innerHTML=data.location.country;
    coname[0].style.fontSize="20px";
    sname[0].innerText=data.location.region;
    cname[0].innerText=data.location.name;
    hdity[0].innerText=data.current.humidity;
    wspeed[0].innerText=data.current.wind_kph+" KMPH";
    temp[0].innerText=data.current.temp_c+" C";
    imglogo[0].src=data.current.condition.icon;
    imgtext[0].innerText=data.current.condition.text;
}
