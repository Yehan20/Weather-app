const model=document.querySelector('.model');
const changeBtn=document.querySelector('#changeBtn');
const closeBtn=document.querySelector('#closeBtn');
const saveBtn=document.querySelector('#saveBtn');

//model event listeners
changeBtn.addEventListener('click',()=>{
    model.style.display='grid';
})
closeBtn.addEventListener('click',()=>{
    model.style.display='none';
})

//instansiate storage object
const storage= new Storage();
const getfromStorage=storage.getStorage();

// instansitation weather object from api
const weather = new Weather(getfromStorage.city,getfromStorage.country);

//instansiation of  the ui
const ui = new Ui();

//load the method when browser is loaded
document.addEventListener('DOMContentLoaded',getweatherNow);

function getweatherNow(){
    weather.getWeather().then(data=>{
        ui.paint(data);
       
    }).catch(err=>console.log(err))
}


//saving new Weather functionality
saveBtn.addEventListener('click',()=>{
    const newCity = document.getElementById('city').value;
    const newCountry=document.querySelector('#myCountry').value;
    const err=document.querySelector('.error');
    if(newCity==='' ||newCountry===''){
        err.textContent='* Fill all The Relevent Feilds'
        setTimeout(()=>{
            err.textContent='';
        },2000)
        return;
    }
                                             // country
    storage.setStorage(newCity,newCountry)
    console.log(newCountry,newCity);
      weather.changeWeather(newCity,newCountry);
      
      getweatherNow();
      model.style.display='none';
      
})


