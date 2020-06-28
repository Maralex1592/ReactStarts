import React from 'react'
import WeatherIcons from 'react-weathericons'
import 'weather-icons/css/weather-icons.css';
import PropTypes from 'prop-types';
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
} from '../../../constants/weather';
import './styles.css'

const icons = {
    [RAIN] : "rain",
    [SUN] : "day-sunny",
    [CLOUD] : "cloud",
    [SNOW] : "snow",
    [THUNDER] : "day-thunderstore",
    [DRIZZLE] : "day-showers"
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
            {`${temperature}`}
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