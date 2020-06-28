import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  "Cali",
  "Bogota",
  "Pekin",
  "Moscow",
];

class App extends Component{
  render(){
    return (
      <div className="App">  
        <LocationList cities={cities} />
      </div>
    );
  }
}

export default App;
