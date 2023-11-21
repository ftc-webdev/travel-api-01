import Field from './Field'

/*
{
  "iataCode": "JFK",
  "icaoCode": "KJFK",
  "name": "JOHN F KENNEDY INTL",
  "alpha2countryCode": "US",
  "latitude": 40.6398,
  "longitude": -73.7787
}
*/

const Airport = ({airport}) => {
  console.log("Airport", airport)
  return (
    <div className="airport">
      <Field label="IATA Code:" data={airport.iataCode} />
      <Field label="ICAO Code:" data={airport.icaoCode} />
      <Field label="Name:" data={airport.name} />
      <Field label="Country:" data={airport.alpha2countryCode} />
      <Field label="Lat/Long:" data={airport.latitude + "/" + airport.longitude} />
    </div>
  )
}

export default Airport