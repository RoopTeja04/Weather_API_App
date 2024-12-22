import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MetroCities = () => {

    const initialCities = [ "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Kolkata"];

    const ApiKey = "79802fa8cfe11e9d14b052839fb57cf0";

    const [ weatherData, setWeatherData ] = useState({});

    const cityImages = {
        Delhi: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0f/c5/e8/5c.jpg", 
        Mumbai: "https://www.holidaymonk.com/wp-content/uploads/2022/04/Gateway-Of-India-MUMBAI.jpg",
        Bangalore: "https://www.clubmahindra.com/blog/media/section_images/unique-thi-9b61e9cde66c5b4.jpg",
        Hyderabad: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2019/07/Hyderabad-feature.jpg",
        Chennai: "https://upload.wikimedia.org/wikipedia/commons/3/32/Chennai_Central.jpg",
        Kolkata: "https://media.istockphoto.com/id/1164386039/photo/howrah-bridge-on-river-ganges-at-kolkata-at-twilight-with-moody-sky.jpg?s=612x612&w=0&k=20&c=CHrNWdInFSDyERdvgd0f8935hZcBQU6lbYCE4LlXqUY=",
    };

    const fetchWeather = async(city) => {
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${ApiKey}`);
            setWeatherData(weatherData => ({ ...weatherData, [city] : response.data}));
        }
        catch(error){
            alert(error)
        }
    }


    useEffect (() => {
        initialCities.forEach(city => fetchWeather(city));
    }, []);

    return (
        <>
            <div className='metro'>
                <h2 className='metro-head'>Metro Cities</h2>
                <div className='metro-container'>
                    {
                        initialCities.map((city) => (
                            <div key={city} className="metro-weather-item">
                                <h2 className='metro-weather-item-name'>{city}</h2>
                                {
                                    weatherData[city] && (
                                        <>  
                                            <div className='metro-weather-item-temp'>
                                                <p className='metro-weather-item-temp-num'>{weatherData[city].main.temp.toFixed(0)}</p><span className='metro-weather-item-temp-ind'>°C</span>
                                            </div>
                                            <div className='metro-weather-item-weather-details'>
                                                <p className='metro-weather-item-weather-details'>Weather: {weatherData[city].weather[0].description}</p>
                                                <p className='metro-weather-item-weather-details'>Max Temp: {weatherData[city].main.temp_max} °C</p>
                                                <p className='metro-weather-item-weather-details'>Max Temp: {weatherData[city].main.temp_min} °C</p>
                                                <p className='metro-weather-item-weather-details'>Width: {weatherData[city].wind.speed} km/h</p>
                                            </div>
                                        </>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default MetroCities;