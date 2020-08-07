import React from 'react';

function WeatherForecast(props) {
    const {forecast} = props
    console.log(forecast)

    function displayDate(date) {
        return new Date(date * 1000).toDateString()

    }

    return (
        <div className="one-forecast">
            <p className="forecast-date">{displayDate(forecast.dt)}</p>
            <div>
                Minimum: {Math.round(forecast.temp.min)}
                <sup>&deg;C</sup>
            </div>
            <div>
                Maximum: {Math.round(forecast.temp.max)}
                <sup>&deg;C</sup>
            </div>

                <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                     alt={forecast.weather[0].description}/>
                <p className="uppercase">{forecast.weather[0].description}</p>
               <p>Humidity: {forecast.humidity} %</p>

        </div>
    );
}

export default WeatherForecast;