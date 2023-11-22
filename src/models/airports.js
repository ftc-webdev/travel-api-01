import aviationReferenceDataSearch from './aviationReferenceDataApi'

const Airports = () => {
  return {
    async get (code) {
      return await aviationReferenceDataSearch(code, 'airports')
    }
  }
}

const airports = Airports()

export default airports
