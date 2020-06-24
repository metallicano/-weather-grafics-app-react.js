import React from 'react';
import Grafica2 from './components/Grafica2'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation'
import Sidebar2 from './components/Sidebar2/Sidebar2'

import './App.css';

function App() {
  return (
    <Router>
      
      
            <div className="container">
            <h1>WEATHER APP</h1>
            <Grafica2></Grafica2>
            </div>   
      
    </Router>
  );
}

export default App;
