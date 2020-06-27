import React, {Component} from 'react'
import transformWeather from './../../services/transformWeather'
//Use brackets where the file to import doesn't use 'default'
import {api_weather} from './../../constants/api_url'
import Location from './Location'
import WeatheData from './WeatherData'
import './styles.css';
import {
    WINDY
} from './../../constants/weather';

const data = {
    temperature : 45,
    weatherState : WINDY,
    humidity : 20,
    wind : '220 km/h', 
}

//This is a Class Component
class WeatherLocation extends Component{

    constructor() {
        super();
        this.state = {
            city : 'Cambridge',
            data : data,
        };
    }

    //Inside of a Class Component, you have to use "this." to call a function
    handleUpdateClick = () => {
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data)
            console.log(newWeather);
            this.setState({
                data:newWeather
            })
            console.log(data);
        });
        console.log("Update Button clicked");     
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