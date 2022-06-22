const weather = document.querySelector(".weather span:last-child");
const city = document.querySelector(".weather span:first-child");
const API_KEY = "24eed551c1ff7c69b5efdfd3c1e6e106";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            city.innerText = data.name;
            weather.innerText =  `${data.weather[0].main}, ${Math.round(data.main.temp)}°C`;
    });
}

function onGeoError(){
    alert("Can't find you. Where are you?");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);