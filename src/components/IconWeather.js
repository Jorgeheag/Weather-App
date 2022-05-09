import React, { useState, useEffect } from 'react';
import axios from  "axios";

const IconWeather = (() => {
    const [iconWeather, setIconWeather] = useState ()

    useEffect(()=>{
        function success(pos) {
            let crd = pos.coords;
    
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=32a600d52a3e5af86f42e6095f52aac2`)
                 .then(res=> setIconWeather(res.data.weather[0].icon) )
                  
        }          
        function error(err) {
         console.warn(`ERROR(${err.code}): ${err.message}`);
          }
    
          navigator.geolocation.getCurrentPosition(success, error);
    
    
    
    },[])

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
    return (
        <div>
            <img src={`http://openweathermap.org/img/wn/${iconWeather}@2x.png`} alt="" />
        </div>
    );
});

export default IconWeather;