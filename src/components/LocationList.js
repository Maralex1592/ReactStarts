import React from 'react'
import WeatherLocation from './WeatherLocation'

const LocationList = () => (
    <div>
        <WeatherLocation city="Cali"></WeatherLocation>
        <WeatherLocation city="Cartagena"></WeatherLocation>
        <WeatherLocation city="Poland"></WeatherLocation>
    </div>
);

export default LocationList;