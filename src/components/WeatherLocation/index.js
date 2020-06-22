import React from 'react'
import Location from './Location'
import WeatheData from './WeatherData'
import './styles.css';
import {
    CLOUDY,
} from './../../constants/weather';

const data = {
    temperature : 6,
    weatherState : CLOUDY,
    humidity : 10,
    wind : '110 km/h', 
}

const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city= {"Puente Nacional Mano"}></Location>
        <WeatheData data={data}></WeatheData>
    </div>
);

export default WeatherLocation;