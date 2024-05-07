const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchbtn');
const weather_img = document.querySelector('.weather-img');
const Temperature = document.querySelector('.temperature');
const Description = document.querySelector('.description');
const humidity = document.getElementById('"humidity');
const wind_speed = document.getElementById('wind-speed');
const loction_not_found = document.querySelector('.location-not-found');
 const weather_body = document.querySelector('.weather-body');

inputBox.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        checkWeather(inputBox.value);
    }
});


async function checkWeather(city) {
    const api_key = '40dd570c933455cfbbfd1bd46fece1ad';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(res => res.json());


    if (weather_data.cod != '200') {
    //     loction_not_found.style.display = 'flex';
    //     Temperature.innerHTML = '';
    //     Description.innerHTML = '';
    //     humidity.innerHTML = '';
    //     wind_speed.innerHTML = '';
    //     weather_img.src = '';
    //     inputBox.value = '';
    //     return;

    // Temperature.innerHTML = `city not found`;
    Description.innerHTML = `city not found`;
    // document.getElementById('humidity').innerHTML = ``;
    // document.getElementById('wind-speed').innerHTML = ``;
    weather_img.src = `./assets/404.png`;

    weather_body.style.display = 'none';
    }


    weather_body.style.display = 'flex';


    Temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}<span>°C</span>`;
    Description.innerHTML = `${weather_data.weather[0].description}`;
    document.getElementById('humidity').innerHTML = `${weather_data.main.humidity}%`;
    document.getElementById('wind-speed').innerHTML = `${weather_data.wind.speed} km/h`;
    weather_img.src = `https://openweathermap.org/img/wn/${weather_data.weather[0].icon}@2x.png`;
}  

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
})

