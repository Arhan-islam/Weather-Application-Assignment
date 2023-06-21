// import './style.css'
// import axios from 'axios'

// const apikey = "83c0c84759b7fe0629cca9ed652c5586";
// const apiurl = "https://api.openweathermap.org/data/2.5/weather";
// const searchBox = document.querySelector (".search input");
// const searchBtn = document.querySelector (".search button");

 
//  const getWeatherData = async (location) =>{
    
//     const response = await fetch(apiurl + `?q=${location}&appid=${apikey}&&units=metric`);
//     if (response.status==404){
//       document.querySelector(".error").style.display = "block";
//       document.querySelector(".weatherCard").style.display = "none";
//      }else{
//       let data = await response.json();
         
//       document.querySelector (".cityDescription").innerHTML = data.name;
//       document.querySelector (".temperature").innerHTML = Math.round(data.main.temp) +`°C`;
//       document.querySelector (".description").innerHTML = data.weather[0].description;
//       document.querySelector (".humidity").innerHTML = data.main.humidity + `%`;
//       document.querySelector (".wind").innerHTML = data.wind.speed + `km/h`;

//       document.querySelector(".error").style.display = "none";
//       document.querySelector(".weatherCard").style.display = "block";
//    }
//      }
    

// document.addEventListener("DOMContentLoaded", () => {
//   searchBtn.addEventListener("click", (event) => {
//     event.preventDefault();
//     getWeatherData(searchBox.value);
//   });
// });



