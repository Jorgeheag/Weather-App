import React, { useState, useEffect } from 'react';
import axios from  "axios";

const Pressure = () => {
    const[pressure, setPressure] = useState ()

    useEffect(()=>{
        function success(pos) {
            let crd = pos.coords;
    
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=32a600d52a3e5af86f42e6095f52aac2`)
                    .then(res=> setPressure(res.data.main.pressure) )

        }          
        function error(err) {
         console.warn(`ERROR(${err.code}): ${err.message}`);
          }
    
          navigator.geolocation.getCurrentPosition(success, error);
    
    },[])

    return (
        <div>
            <h1>Pressure:{pressure} mb</h1>
        </div>
    );
};

export default Pressure;