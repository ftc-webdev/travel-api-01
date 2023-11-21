import { useState } from 'react'
import { sampleSearchAirlineCode } from '../data'
import { Input } from './Form'
import Airline from './Airline'

const AirlineData = () => {
  
  const [airlineData, setAirlineData ] = useState(null)
  const [airlineCode ] = useState("")

  const getAirlineData = async (airlineCode) => {
    // go off and fetch the data
    const data = await sampleSearchAirlineCode(airlineCode)
    setAirlineData(data)
  }

  const onAirlineCodeEnter = (e) => {
    let airlineCode = e.target.value
    if(e.keyCode === 13) {
      getAirlineData(airlineCode)
    }
    
  }

  return (
    <>
      <Input 
        label="Enter Airline Code" 
        value={airlineCode} 
        onEnter={onAirlineCodeEnter} 
        placeholder="Enter an airline code"
      />
      {airlineData && <Airline airline={airlineData} />}
    </>
  )
}

export default AirlineData



