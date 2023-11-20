import './App.css';
import { useState } from 'react'


const sampleCountrySearchCode = async () => {
  const url = 'https://aviation-reference-data.p.rapidapi.com/countries';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '43b67899b8msh628d113745d1ea3p1f3862jsn458a8944bd33',
      'X-RapidAPI-Host': 'aviation-reference-data.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
const sampleSearchAirlineCode = async (code) => {
  
  const url = `https://aviation-reference-data.p.rapidapi.com/airline/${code}`;
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '43b67899b8msh628d113745d1ea3p1f3862jsn458a8944bd33',
      'X-RapidAPI-Host': 'aviation-reference-data.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result
  } catch (error) {
    console.error(error);
  }
}

const Field = ({ label, data }) => {
  return (
    <div className="field">
      <span className="label">{label}</span>
      <span classname="data">{data}</span>
    </div>
  )
}

const Airline = ({ airline }) => {
  return (
    <div>
      <h3>Airline Data</h3>
      <Field label="Iata Code" data={airline.iataCode} />
      <Field label="Name" data={airline.name} />
      <Field label="ICAO Code" data={airline.icaoCode} />
      <Field label="Callsign" data={airline.callsign} />
      <Field label="Country" data={airline.alpha3countryCode} />

    </div>
  )
}

const App = () => {

  const [airlineData, setAirlineData ] = useState(null)
  const [airlineCode, setAirlineCode ] = useState(null)

  const getAirlineData = async (airlineCode) => {
    // go off and fetch the data
    const data = await sampleSearchAirlineCode(airlineCode)
    setAirlineData(data)
  }

  const onCodeEnter = (e) => {
    let airlineCode = e.target.value
    if(e.keyCode === 13) {
      getAirlineData(airlineCode)
    }
    
  }


  return (
    <div className="App">
      <header className="App-header">
        <input 
          onKeyDown={onCodeEnter} 
          value = {airlineCode}
          placeholder="Enter an airline code"
        />
        <button
          onClick={getAirlineData}
        >
          Get Airline Data
        </button>
        {airlineData && <Airline airline={airlineData} />}
        
      </header>
    </div>
  );
}

export default App;
