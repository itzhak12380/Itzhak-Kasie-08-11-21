import { Forcast, currntCity } from '../../redux/weather/weather'
const key = process.env.REACT_APP_APIKEY
export async function  getWeather(id) {
    const base = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/"
    const query = `${id}?apikey=x9oGCV9tals7Wpdz7kdMunbGAn8GFAoz`
    const responce = await fetch(base + query)
    const data = await responce.json()
    return data;
 }
export async function getCity(city) {
    const base = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete"
    const query = `?apikey=x9oGCV9tals7Wpdz7kdMunbGAn8GFAoz&q=${city}`
    const responce = await fetch(base + query)
    const data = await responce.json();
    console.log(data);
    return data[0]
}

export const fetchData = async (city,handleError,updateGlobalState) => {
    // fetch citys information
    let cityApi = await getCity(city)
        .then((responce) => {
            return responce
        })
        .catch((error) => {
            return error
        })
    if (cityApi === undefined) {
        return handleError(true)
    }
    // fetch weather
    let weatherApi = await getWeather(cityApi.Key)
        .then((responce) => {
            return responce.DailyForecasts
        })
        .catch((error) => {
            return error
        })

    if (weatherApi.message) {
        handleError(true)
    }
    else {
        updateGlobalState(Forcast(weatherApi))
        updateGlobalState(currntCity({
            temperature: `${weatherApi[0].Temperature.Maximum.UnitType} F`,
            weather: weatherApi[0].Day.IconPhrase,
            LocalizedName: cityApi?.LocalizedName,
            Key: cityApi?.Key
        }))
    }
}

