// const Base_URL = https://api.openweathermap.org/data/2.5/weather?q=germany&appid=59c3d8d0ec0e7eaf19d4583195919db5



const temp = document.querySelector(".temp");
const btn = document.querySelector(".search button")



const updateWeather = async () => {
    const input = document.querySelector(".country input");
    const hum = document.querySelector(".humidity h2");
    const speed = document.querySelector(".speed h2");
    const state = document.querySelector(".state");
    const cond = document.querySelector(".condition");

let country = input.value;
// console.log(country);
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=59c3d8d0ec0e7eaf19d4583195919db5&units=metric`;
let response = await fetch(URL);
let data = await response.json();
let temperature = Math.floor(data.main.temp);

let humidity = data.main.humidity;
let windSpeed = data.wind.speed;

let sky = data.weather[0].main;

// let temp = data[temp];
// console.log(data.weather[0].main);

cond.src=`${sky}.png`;
temp.innerText = `${temperature}°c`;
hum.innerText = `${humidity}%`;
speed.innerText = `${windSpeed}km/h`;


state.innerText = data.name;

}

btn.addEventListener ("click" , () =>{
   updateWeather();


});