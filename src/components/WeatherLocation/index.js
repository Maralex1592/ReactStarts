import React from 'react'
import Location from './Location'
import WeatheData from './WeatherData'
import './styles.css';

const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city= {"Puente Nacional Mano"}></Location>
        <WeatheData></WeatheData>
    </div>
);

export default WeatherLocation;