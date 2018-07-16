import React, { Component } from 'react';
import Picker from './picker';
import LargeText from './largeText'

export default class App extends Component {
  render() {
    return <Clock/>
    return (
      <div className="grid">
        <div className="grid__skew-dark-one"></div>
        <div className="grid__skew-dark-two"></div>
        <div className="grid__skew-dark-three"></div>
        <div className="grid__skew-light-one"></div>
        <div className="grid__skew-light-two"></div>
        <div className="grid__skew-light-three"></div>
        { Button(`Genereate Countdown`) }
        
        { Button(`Genereate Countdown`) }
      </div>
    );
  }
}
