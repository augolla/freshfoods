import React from 'react';
import './App.css';
import {Switch,Route} from 'react-mini-router'
import Homepage from './components/Homepage'
import Header from './components/Header'
import Shop from './components/Shop'

function App() {
  return (
    <div className="App">
      <Header/>
      <Homepage/>
    </div>
  );
}

export default App;
