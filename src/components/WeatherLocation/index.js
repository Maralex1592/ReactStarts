import React, {Component} from 'react'
import transformWeather from './../../services/transformWeather'
import CircularProgress from '@material-ui/core/CircularProgress'
import {PropTypes} from 'prop-types'
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity'
//Use brackets where the file to import doesn't use 'default'
import Location from './Location'
import WeatheData from './WeatherData'
import './styles.css';

//This is a Class Component
class WeatherLocation extends Component{

    constructor(props) {
        super(props);
        const { city } = props;

        this.state = {
            city ,
            data : null,
        };
    }

    //cdm
    componentDidMount() {
        this.handleUpdateClick();
    }
    
    //cdup
    componentDidUpdate(prevProps, prevState) {
    }

    //Inside of a Class Component, you have to use "this." to call a function
    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data)
            this.setState({
                data:newWeather
            })
        });
    }
  render(){
      const { city, data } = this.state;
      return(
        <div className="weatherLocationCont">
        <Location city= {city}></Location>
        {data ?<WeatheData data={data}></WeatheData> :  <CircularProgress size={50}/>}
        </div>
      );
  }
}

WeatherLocation.protoTypes = {
    city : PropTypes.string.isRequired,
}

export default WeatherLocation;