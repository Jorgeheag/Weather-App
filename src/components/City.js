import React, { useState, useEffect } from 'react';
import axios from  "axios";

const City = (() => {

    const [city, setCity] = useState ()

    useEffect(()=>{
        function success(pos) {
            let crd = pos.coords;
    
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=32a600d52a3e5af86f42e6095f52aac2`)
                    .then(res=> setCity(res.data) )

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
            <h1>{city?.name}-{city?.sys.country}</h1>
        </div>
    );
});

export default City;