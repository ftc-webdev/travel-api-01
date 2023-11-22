import { useState } from 'react'
import './App.css';
import AirlineData from './components/AirlineData'
import AirportData from './components/AirportData'
import { geoLocateIP } from './data'
import models from "./models" // pick up the index.js frpom ./models folder

const App = () => {
  const [ geoData, setGeoData ] = useState()
  const [ country, setCountry ] = useState()

  const onGeoLocateClick = () => {
    geoLocateIP()
    .then(data => {
      setGeoData(data)
      setCountry(data.country_name)
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        Airline Travel API Portal        
      </header>
      <main>
        
        <AirlineData />
        
        <AirportData />

        <button
          className="btn"
          onClick={onGeoLocateClick}
        >
          GeoLocate This Computer
        </button>
        {country && <div><span>Country</span><span>{country}</span></div>}
      </main>

    </div>
  );
}

export default App;
