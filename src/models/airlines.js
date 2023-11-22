
import aviationReferenceDataSearch from './aviationReferenceDataApi'

const Airlines = () => {
  
  const get = async (code) => {
    return await aviationReferenceDataSearch(code, 'airline')
  }

  return {
    get
  }
}

const airlines = Airlines()

export default airlines