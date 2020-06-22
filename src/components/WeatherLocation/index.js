import React, {Component} from 'react'
import Location from './Location'
import WeatheData from './WeatherData'
import './styles.css';
import {
    CLOUDY,
    WINDY,
} from './../../constants/weather';

const data = {
    temperature : 45,
    weatherState : WINDY,
    humidity : 20,
    wind : '220 km/h', 
}

const data2 = {
    temperature : 6,
    weatherState : CLOUDY,
    humidity : 10,
    wind : '110 km/h', 
}

//This is a Class Component
class WeatherLocation extends Component{

    constructor() {
        super();
        this.state = {
            city : 'Buenos Aires',
            data : data,
        };
    }
    //Inside of a Class Component, you have to use "this." to call a function
    handleUpdateClick = () => {
        console.log("Update Button clicked");
        this.setState ({
            city : 'Camboya',
            data : data2,
        });
    }
  render(){
      const { city, data } = this.state;
      return(
        <div className="weatherLocationCont">
        <Location city= {city}></Location>
        <WeatheData data={data}></WeatheData>
        <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>
      );
  }
}

export default WeatherLocation;