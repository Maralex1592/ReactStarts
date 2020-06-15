import React from 'react'
import WeatherExtraInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTeperature'

const WeatherData = () =>(
    <div>
        <WeatherExtraInfo humidity={70} wind={"10 km/h"}/>
        <WeatherTemperature />
    </div>
);

export default WeatherData;