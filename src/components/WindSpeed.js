import React, { useState, useEffect } from 'react';
import axios from  "axios";



const WindSpeed = () => {
    const [winds, setWinds] = useState  ()

    useEffect(()=>{
        function success(pos) {
            let crd = pos.coords;
          
              axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=32a600d52a3e5af86f42e6095f52aac2`)
            .then(res=> setWinds(res.data.wind.speed))

          }
          
          function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
          }
          
          navigator.geolocation.getCurrentPosition(success, error,);
    },[])


    return (
        <div>
            <h1>Winds speed:{winds}m/s</h1>
        </div>
    );
};

export default WindSpeed;