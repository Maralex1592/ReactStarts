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

//This is a Class Component
class WeatherLocation extends Component{

    constructor() {
        super();
        this.state = {
            city : 'Cambridge',
            data : null,
        };
        console.log("constructor");
    }

    //cdm
    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }
    
    //cdup
    componentDidUpdate(prevProps, prevState) {
        console.log("UNSAFE componentDidUpdate");
    }

    //Inside of a Class Component, you have to use "this." to call a function
    handleUpdateClick = () => {
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data)
            this.setState({
                data:newWeather
            })
        });
        console.log("Update Button clicked");     
    }
  render(){
    console.log("render");
      const { city, data } = this.state;
      return(
        <div className="weatherLocationCont">
        <Location city= {city}></Location>
        {data ?<WeatheData data={data}></WeatheData> :  "Cargando..."}
        </div>
      );
  }
}

export default WeatherLocation;