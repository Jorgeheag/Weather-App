import React, { useState, useEffect } from 'react';
import axios from  "axios";

const Temperature = () => {
    const [temperature, setTemperature] = useState ()

    useEffect(()=>{
        function success(pos) {
            let crd = pos.coords;
    
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=32a600d52a3e5af86f42e6095f52aac2`)
                 .then(res=> setTemperature((res.data.main.temp-273).toFixed(1)))

        }          
        function error(err) {
         console.warn(`ERROR(${err.code}): ${err.message}`);
          }
    
          navigator.geolocation.getCurrentPosition(success, error);
      },[])

    const [change, setChange] = useState(true)
    const changeCom = () => {
      if (change) {
        setTemperature((temperature*1.8+32).toFixed(1))
        setChange(false)
      }else{
        setTemperature(((temperature-32)/1.8).toFixed(1))
        setChange(true)
      }
    }
    return (
        <div>
            <h1>{temperature}{change?" C°":" F°"}</h1>
            <img src="tem" alt="" />
            <br />
            <button onClick={changeCom}>C°-F°</button>
        </div>
    );
};

export default Temperature;