class Storage{
    constructor(){
        this.defaultCity='Boston';
        this.defaultCountry='US';
        this.city;
        this.country;
    }

    //getinf storage if not available adding 
    getStorage(){
        if(localStorage.getItem('city')===null){
            this.city=this.defaultCity
        }
        else{
           this.city=localStorage.getItem('city')
        }

        if(localStorage.getItem('country')===null){

            this.country=this.defaultCountry;
        }
        else{
            this.country= localStorage.getItem('country');
        }

        return{
            city:this.city,
            country:this.country
        }
    }

    setStorage(city,country){
       localStorage.setItem('city',city)
       localStorage.setItem('country',country);
    }
}