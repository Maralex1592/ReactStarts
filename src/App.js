import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation'
import OtherComponent from './components/OtherComponent'
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">  
        Weather APP.... It Works
        <WeatherLocation />
        <OtherComponent />
      </div>
    );
  }
}

export default App;
