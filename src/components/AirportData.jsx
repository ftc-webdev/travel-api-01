import { useState } from 'react'
import Airport from './Airport'
import { sampleSearchAirportCode } from '../data';
import { Input } from './Form'

const AirportData = () => {

  const [airportData, setAirportData ] = useState(null)
  // const [airportCode ] = useState()
  let airportCode 

  const getAirportData = async (airportCode) => {
    // go off and fetch the data
    const data = await sampleSearchAirportCode(airportCode)
    console.log("airport", data)
    setAirportData(data)
  }
  const onAirportCodeEnter = (e) => {
    let airportCode = e.target.value
    if(e.keyCode === 13) {
      getAirportData(airportCode)
    }
    
  }

  return (
    <> 
      <Input 
        label="Enter Airport Code" 
        value={airportCode} 
        onEnter={onAirportCodeEnter} 
        onChange={(e) => e.target.value = e.target.value.toUpperCase()}
        placeholder="Enter an airport code"
      />
      {airportData && <Airport airport={airportData} />} 
    </>
  )
}

export default AirportData