import React from 'react'
import PropTypes from 'prop-types';

//Get parameters using destructuring
const WeatherExtraInfo = ({humidity, wind}) => (
    //Use template String, sintax = "`${var} ${const}`"
<div>
    <span>{`${humidity} % - `}</span>
    <span>{`${wind} Wind`}</span>
    
</div>
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}
export default WeatherExtraInfo;