
import './App.css';
import React, { Component } from 'react';
import PersonState from './PersonState';

class App extends Component {
  constructor(props){
    super (props)
 
};

  render() {
    return (
      <div>
        <h1 className="App">Oluwagbenga Olaleye</h1>
        <PersonState />
      </div>
    );
  }
}




export default App;
