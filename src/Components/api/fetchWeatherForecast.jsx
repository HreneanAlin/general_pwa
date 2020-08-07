import axios from "axios";

const URL = "pro.openweathermap.org/data/2.5/forecast/hourly"
const API_KEY = '1666a99cd3fa57ed947b82ca84be3dee';

export const fetchWeatherForecast = async (lon,lat) => {
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/onecall`,{
        params:{
            lat:lat,
            lon:lon,
            units:'metric',
            appid:API_KEY

        }
    })
    return data;
}
