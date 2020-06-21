import React from 'react'
import WeatherExtraInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTeperature'
import {
    CLOUDY,
} from './../constants/weather';

const WeatherData = () =>(
    <div>
        <WeatherExtraInfo humidity={70} wind={"10 km/h"}/>
        <WeatherTemperature 
            temperature={20}
            weatherState={CLOUDY}
        />
    </div>
);

export default WeatherData;