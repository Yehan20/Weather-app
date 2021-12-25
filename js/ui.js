class Ui{
    constructor(){
        this.airPressure=document.getElementById('airPressure');
        this.humidity=document.getElementById('humidity');
        this.temperature=document.getElementById('temperature');
        this.details=document.getElementById('country');
        this.desc=document.getElementById('desc');
        this.logitude=document.getElementById('logitude');
        this.langitude=document.getElementById('latitude');
    }

    paint(weather){
        this.airPressure.textContent=`Presure: ${weather.main.pressure} hPa`;
        this.humidity.textContent=`Humidity: ${weather.main.humidity}% `;     
        this.temperature.textContent=`${(weather.main.temp - 273.15).toFixed(1)}°C | ${((weather.main.temp - 273.15)*9/5+32).toFixed(1)}°F `;
        this.details.textContent=`${weather.name} , ${weather.sys.country}`;
        this.desc.textContent=`${weather.weather[0].description}`;
        this.logitude.textContent=`Longitude : ${weather.coord.lon} ° N`;
        this.langitude.textContent=`Latidude : ${weather.coord.lat} ° E`;

    }
}