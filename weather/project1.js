const themeBtn= document.querySelector(".themeBtn");
const root= document.querySelector(":root");
let count=1;

function changeTheme(){
    if(count==4){
        count=0;
    }
    if(count==0){
        root.style.setProperty("--bg-color", "#080808");
        root.style.setProperty("--second-bg-color", "#001005");
        root.style.setProperty("--text-color", "white");
        root.style.setProperty("--main-color", "#00ff51");
    }
    else if(count===1){
        root.style.setProperty("--bg-color", "#080808;");
        root.style.setProperty("--second-bg-color", "#100010");
        root.style.setProperty("--text-color", "white");
        root.style.setProperty("--main-color", "#f200ff");
    }
    else if(count==2){
        root.style.setProperty("--bg-color", "#080808");
        root.style.setProperty("--second-bg-color", "#000b10");
        root.style.setProperty("--text-color", "white");
        root.style.setProperty("--main-color", "#00c3ff");
    }
    else if(count==3){
        root.style.setProperty("--bg-color", "#080808");
        root.style.setProperty("--second-bg-color", "#0d1000");
        root.style.setProperty("--text-color", "white");
        root.style.setProperty("--main-color", "#c3ff00");
    }
    else if(count==4){
        root.style.setProperty("--bg-color", "#080808");
        root.style.setProperty("--second-bg-color", "#020010");
        root.style.setProperty("--text-color", "white");
        root.style.setProperty("--main-color", "#0d00ff");
    }
}



themeBtn.addEventListener("click",function(){changeTheme(); count++});


//javascipt for weather api call
var apiKey="0ba78b9425c28fc08d10a022802341f9";
const searchBtn= document.querySelector(".fa-magnifying-glass");

//buttons//
const city= document.querySelector(".cityJs");
const temp= document.querySelector(".tempJs");
const feelsLike= document.querySelector(".feelsLikeJs");
const windSpeed= document.querySelector(".windSpeedJs");
const humidity= document.querySelector(".humidityJs");
const imgChange=document.querySelector(".imgChange");
 




//ends here//
searchBtn.addEventListener("click",function(event){
    const cityName=document.querySelector(".cityName").value;
    callApi(cityName);
});

const cityNameInput=document.querySelector(".cityName");
cityNameInput.addEventListener("keydown",function(event){
    if(event.key=="Enter"){
        event.preventDefault();
       const cityName=cityNameInput.value;
       callApi(cityName);
    }
});


async function callApi(cityName){
   const result= await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKey}`);
   const finalResult= await result.json();
   //error
   if(finalResult.cod==404){
    city.innerHTML="Invalid City Name";
   }
   else{
   city.innerHTML=finalResult.name;
   }
   //image
   if(finalResult.weather[0].main=="Rain"){
    imgChange.src="rain.jpg";
   }
   else if(finalResult.weather[0].main=="Mist"){
    imgChange.src="summer.jpg";
   }
   else if(finalResult.weather[0].main=="Clouds"){
    imgChange.src="cloud.jpg";
   }
   else if(finalResult.weather[0].main=="Drizzle"){
    imgChange.src="rain.jpg";
   }
   else if(finalResult.weather[0].main=="Clear"){
    imgChange.src="rain.jpg";
   }

   temp.innerHTML=finalResult.main.temp + "°C";
   feelsLike.innerHTML="FeelsLike "+finalResult.main.feels_like + "°C";
   windSpeed.innerHTML=finalResult.wind.speed + "km/h";
   humidity.innerHTML=finalResult.main.humidity+ "%";
}

