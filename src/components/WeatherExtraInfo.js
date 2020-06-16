import React from 'react'

//Get parameters using destructuring
const WeatherExtraInfo = ({humidity, wind}) => (
    //Use template String, sintax = "`${var} ${const}`"
<div>
    <span>{`${humidity} % - `}</span>
    <span>{`${wind} Wind`}</span>
    
</div>
);
export default WeatherExtraInfo;