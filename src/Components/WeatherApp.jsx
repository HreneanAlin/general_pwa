import React, {useEffect, useState} from 'react';
import {fetchWeather} from "./api/fetchWeather";
import {fetchWeatherForecast} from "./api/fetchWeatherForecast";
import Loader from "./Loader";
import WeatherForecast from "./WeatherForecast";

function WeatherApp(props) {
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState({})
    const [forecast, setForcast] = useState({})
    const [loading, setLoading] = useState(false)



    const search = async (e) => {
        if (e.key === "Enter") {
            setLoading(true)
            const data = await fetchWeather(query)

            setWeather(data)
             const forecastData = await fetchWeatherForecast(data.coord.lon,data.coord.lat)
             console.log(forecastData)
             setForcast(forecastData)
            setLoading(false)
            setQuery('');
        }

    }

    if(loading) return <Loader/>

    return (
        <main className="main-container">
            <h1>Weather App</h1>
            <input
                type="text"
                className="search"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={search}

            />
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="city-humidity">
                        Humidity: {weather.main.humidity}%
                    </div>
                    <div className="info">
                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                             alt={weather.weather[0].description}
                             className="city-icon"/>
                        <p className="uppercase">{weather.weather[0].description}</p>
                        <p>Wind speed: {weather.wind.speed} km/h</p>
                    </div>
                </div>

            )}
            {forecast.daily && (<div className="forcast-container">
                {forecast.daily.map((forc,index)=>
                    <WeatherForecast
                    key={index}
                    forecast={forc}
                    />
                )}</div>)}

        </main>
    );
}

export default WeatherApp;