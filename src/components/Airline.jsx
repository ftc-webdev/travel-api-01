import Field from './Field'

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

export default Airline