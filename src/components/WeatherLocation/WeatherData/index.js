import React from 'react'
import WeatherExtraInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTeperature'
import {
    CLOUDY,
} from './../../../constants/weather';
import './styles.css'

const WeatherData = () =>(
    <div className="weatherDataCont" >
        <WeatherTemperature 
            temperature={20}
            weatherState={CLOUDY}
        />
        <WeatherExtraInfo humidity={70} wind={"10 km/h"}/>
    </div>
);

export default WeatherData;