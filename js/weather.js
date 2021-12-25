class Weather {
    constructor(city,country){
        this.apiId='a5c3c822d253c1832efc33c03a2b487b';
     
        this.country=country;
        this.city=city;
    }
    async getWeather(){
        const response =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiId}`);

        const result = await response.json();

        return result;
    }
    changeWeather(city,country){
        this.country=country;
        this.city=city;
    }
}

