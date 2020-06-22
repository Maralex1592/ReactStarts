import React from 'react'
import PropTypes from 'prop-types';
import './styles.css';

/*
const Location  = (props) => {
    
    //destructuring
    //const city = props.city;
    const { city } = props;

    return (
        <div><h1>{city}</h1></div>);
};
*/

const Location  = ({city}) => (
    
    //destructuring
    //const city = props.city;
    //const { city } = props;

   
        <div className="locationCont">
            <h1>
                {city}
            </h1>
        </div>
    );

Location.propTypes = {
    city: PropTypes.string.isRequired,
}
export default Location;