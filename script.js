
var city= "Lajeado";

const dados= () => {
    return fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&lang=pt_br&appid=a54b6770ba0b0225f20457f9717399a0')
    .then(resposta =>{
        return resposta.json()
    })  
}

dados()
.then(data =>{
    var iconWeather = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var tempWeather = Math.floor(data.main.temp);
    var description = data.weather[0].description;
    var feelsLikeWeather = Math.floor(data.main.feels_like);

    feelsLike= document.querySelector(".feels_like")
    feelsLike.append("sensação térmica de " + feelsLikeWeather + " graus");

    weather= document.querySelector(".weather")
    weather.append(description)

    document.getElementById("icon").src= iconWeather

    temp= document.querySelector(".temp")
    temp.append(tempWeather + " graus")

})



