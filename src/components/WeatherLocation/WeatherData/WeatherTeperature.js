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
} from '../../../constants/weather';
import './styles.css'

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
    const sizeIcon = "4x";
    if (icon )
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
    else
        return <WeatherIcons className="wicon" name={"day-fog"} size={sizeIcon} />; 
}
const Weathertemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont" >
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">
            {`${temperature} °C`}
        </span>
        <span className="temperatureType">
            {`°C`}
        </span>
    </div>
);

Weathertemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default Weathertemperature;