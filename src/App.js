import React, { Component } from 'react';
import Weatherlocation from './components/Weatherlocation'
import OtherComponent from './components/OtherComponent'
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        Weather APP.... It Works
        <Weatherlocation />
        <OtherComponent />
      </div>
    );
  }
}

export default App;
