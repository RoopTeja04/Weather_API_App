import React, { useState } from 'react';
import axios from 'axios';
import { FaSearch } from "react-icons/fa";

const SearchCities = () => {

    const ApiKey = "79802fa8cfe11e9d14b052839fb57cf0";

    const [searchData, setSearchData] = useState("");
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeather = async (city) => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${ApiKey}`);
            setWeatherData(response.data);
        } catch (error) {
            alert(error);
        }
    };

    const handleSearch = (e) => {
        if (searchData) {
            fetchWeather(searchData);
            setSearchData("");
        }
    }

    return (
        <>
            <div className='search-city'>
                <h1 className='search-city-head'>Search Cities</h1>
                <div className="search-bar">
                    <input type='text' value={searchData} onChange={(e) => setSearchData(e.target.value)} required />
                </div>
                <button onClick={handleSearch}><FaSearch className='search-button' /></button>

                <div>
                    {weatherData && (
                        <div className="weather-info">
                            <h1>
                                {weatherData.name}, {weatherData.sys.country}
                            </h1>
                            <p className='weather-info-temp'>{weatherData.main.temp.toFixed(0)}°C</p>
                            <p className='weather-info-temp-val'>
                                <strong>Weather:</strong> {weatherData.weather[0].main}
                            </p>
                            <p className='weather-info-temp-val'>
                                <strong>Wind Speed:</strong> {weatherData.wind.speed}
                            </p>
                            <p className='weather-info-temp-val'>
                                <strong>Feels Like:</strong> {weatherData.main.feels_like}
                            </p>
                            <p className='weather-info-temp-val'>
                                <strong>Humidity:</strong> {weatherData.main.humidity}%
                            </p>
                            <p className='weather-info-temp-val'>
                                <strong>Longitude:</strong> {weatherData.coord.lon}
                            </p>
                            <p className='weather-info-temp-val'>
                                <strong>Latitude:</strong> {weatherData.coord.lat}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default SearchCities;