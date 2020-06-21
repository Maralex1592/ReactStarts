import React from 'react'
import Location from './Location'
import WeatheData from './WeatherData'

const WeatherLocation = () => (
    <div>
        <Location city= {"Puente Nacional Mano"}></Location>
        <WeatheData></WeatheData>
    </div>
);

export default WeatherLocation;