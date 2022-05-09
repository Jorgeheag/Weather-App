import logo from './logo.svg';
import './App.css';
import Weather from "./components/Weather";
import City from "./components/City";
import WindSpeed from "./components/WindSpeed";
import Clouds from "./components/Clouds";
import Pressure from "./components/Pressure";
import Temperature from "./components/Temperature";
import IconWeather from "./components/IconWeather";
//Iconos
import termometro from "./images/termometro.png"
import anemometro from "./images/anemometro.png"
import cloud from "./images/cloud-computing.png"
import presion from "./images/presion.png"


function App() {
  return (
    <div className="App">
      <div className='card-Weather'>
      <Weather/>
      <IconWeather/><City/>
      
      <div className='icon-text'>
      <img className='inconChild'  src={anemometro} alt="" /> <WindSpeed/>
      </div>
      <div className='icon-text'>
        <img className='inconChild' src={cloud} alt="" /><Clouds/>
      </div>
      <div className='icon-text'>
        <img className='inconChild' src= {presion} alt="" /> <Pressure/>
      </div>
      <div >
        <img className='inconChild' src={termometro} alt="" /><Temperature/>
      </div>
      
      
      </div>
      
    </div>
  );
}

export default App;
