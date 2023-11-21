import { useState, useEffect } from 'react'
import Field from './Field'
import { sampleSearchCountryCode } from '../data'

const Airline = ({ airline }) => {

  const [country, setCountry ] = useState()
  // const country = await sampleSearchCountryCode(airline.alpha3countryCode)
  useEffect(() => {
    
    sampleSearchCountryCode(airline.alpha3countryCode)
    .then((data) => {
      console.log("then", data)
      setCountry(data)
    })

  }, [airline])
  
  return (
    <div className="container">
      <div className="airline">

        <h3>Airline Data</h3>
          <Field label="IATA Code" data={airline.iataCode} />
          <Field label="Name" data={airline.name} />
          <Field label="ICAO Code" data={airline.icaoCode} />
          <Field label="Callsign" data={airline.callSign} />
          <Field label="3 Alpha" data={airline.alpha3countryCode} />
          {country && <Field label="Country" data={country.name} /> }
      </div>
    </div>
  )
}

export default Airline