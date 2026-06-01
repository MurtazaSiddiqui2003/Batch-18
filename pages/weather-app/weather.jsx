import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './weather.css'

const Weather = () => {
    const [weatherInput, setWeatherInput] = useState("")
    const [weatherdata, setWeatherData] = useState(null);
    const [error, setError] = useState('')
    const [bgClass, setBgClass] = useState('default-bg');
    // const [bgImage, setBgImage] = useState('./weather-image/30.jpg');

    const apiKey = "2f72516b13a2d95faebd1208575786a6"

    const updateBackground = (temp) => {
        if (temp <= 9) return "bg-9";
        if (temp <= 19) return "bg-19";
        if (temp <= 29) return "bg-29";
        if (temp <= 39) return "bg-39";
        if (temp <= 49) return "bg-49";
        return "bg-50";
    }
    const checkWeather = async () => {
        if (weatherInput.trim() == "") {
            alert("Please Enter A City Name");
            return;
        }

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${weatherInput}&appid=${apiKey}&units=metric`
        // const getWeatherData = async () => {
        try {
            setError('')
            const res = await axios.get(apiUrl);
            const data = res.data;
            console.log(data)
            setWeatherData(data)
            setBgClass(updateBackground(data.main.temp));
        } catch (err) {
            console.log("Something Went Wrong,");
            setWeatherData(null);
            setError(`We're Sorry! Your Mentioned City "${weatherInput}" Not Found`)
        }
    };
    // useEffect(() => {
    //     getWeatherData();
    // }, []);
    return (
        <div className={`weather-page ${bgClass}`}>
            <div id='container'>
                <div>
                    <h2>Weather App</h2>
                    <input
                        type="text"
                        id="weatherInput"
                        value={weatherInput}
                        placeholder="Enter City Name"
                        onChange={(e) => setWeatherInput(e.target.value)} />
                    <button onClick={checkWeather}>Check Weather</button>
                    <div class="weather-info" id="weather">
                        {error && <p>{error}</p>}
                        {weatherdata && (
                            <div>
                                <h3>{weatherdata.name}, {weatherdata.sys.country}</h3>
                                <p>Temperature: 🌡️${weatherdata.main.temp}°C</p>
                                <p>Feels Like: ${weatherdata.main.feels_like}</p>
                                <p>Humidity: ${weatherdata.main.humidity}%</p>
                                <p>Sky: ☁️ ${weatherdata.weather[0].description}</p>
                                <p>Wind Speed: 💨 Wind: ${weatherdata.wind.speed} m/s</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Weather;