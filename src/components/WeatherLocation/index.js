import React, {Component} from 'react'
import convert from 'convert-units'
import Location from './Location'
import WeatheData from './WeatherData'
import './styles.css';
import {
    CLOUDY,
    WINDY
} from './../../constants/weather';

const location = "Poland,pl";
const api_key = "6edc65645385be69e0675fe8b6852258";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

//const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}&units=metric`;
const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

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
            city : 'Buenos Aires',
            data : data,
        };
    }

    getWeatherState = weather_data =>{
        return CLOUDY;
    }

    getTemp = kelvin => {
        return Number(convert(kelvin).from("K").to("C").toFixed(2));
    }

    getData = weather_data =>{
        const{humidity, temp} = weather_data.main;
        const {speed} = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);
        const temperature = this.getTemp(temp);

        const data = {
            humidity,
            temperature,
            weatherState,
            wind: `${speed} m/s`,
        }
        return data;
    }
    //Inside of a Class Component, you have to use "this." to call a function
    handleUpdateClick = () => {
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = this.getData(data)
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