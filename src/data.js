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


const sampleSearchAirportCode = async (code) => {
  
  const url = `https://aviation-reference-data.p.rapidapi.com/airports/${code}`;
  
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

export {
  sampleSearchAirlineCode,
  sampleSearchAirportCode,
  sampleCountryGetAll
}