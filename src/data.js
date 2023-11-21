
const avaiationReferenceDataSearch = async (code, endpoint) => {

  const url = `https://aviation-reference-data.p.rapidapi.com/${endpoint}/${code}`;
  
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
    console.log('aviationRefeneceDataSearch', endpoint, code, result);
    return result
  } catch (error) {
    console.error(error);
  }

}

const sampleSearchCountryCode = async (code) => {
  return await avaiationReferenceDataSearch(code, 'countries')
}

const sampleSearchAirlineCode = async (code) => {
  return await avaiationReferenceDataSearch(code, 'airline')
}


const sampleSearchAirportCode = async (code) => {
  return await avaiationReferenceDataSearch(code, 'airports')
}

const sampleCountryGetAll = async () => {
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

export {
  sampleSearchCountryCode,
  sampleSearchAirlineCode,
  sampleSearchAirportCode,
  sampleCountryGetAll
}