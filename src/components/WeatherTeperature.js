import React from 'react'
import WeatherIcons from 'react-weathericons'
import 'weather-icons/css/weather-icons.css';
import PropTypes from 'prop-types';
import {
    SUNNY,
    FOG,
    CLOUDY,
    THUNDERSTORM,
    WINDY,
    RAIN,
} from './../constants/weather';

const icons = {
    [SUNNY] : "day-sunny",
    [FOG] : "day-fog",
    [CLOUDY] : "day-cloudy",
    [THUNDERSTORM] : "day-thunderstorm",
    [WINDY] : "day-windy",
    [RAIN] : "rain"

};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if (icon )
        return <WeatherIcons name={icon} size="2x" />;
    else
        return <WeatherIcons name={"day-fog"} size="2x" />; 
}
const Weathertemperature = ({temperature, weatherState}) => (
    <div>
        {
            getWeatherIcon(weatherState)
        }
        <span>
            {`${temperature} °C`}
        </span>
    </div>
);

Weathertemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default Weathertemperature;