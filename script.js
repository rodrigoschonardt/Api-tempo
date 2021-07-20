
var city= "Lajeado";


$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&lang=pt_br&appid=a54b6770ba0b0225f20457f9717399a0", function(data){
    console.log(data);

    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

    var temp = Math.floor(data.main.temp);
    
    var description = data.weather[0].description;

    $('.weather').append(description);
    $('.icon') .attr('src', icon);
    $('.temp').append(temp + " graus");
});