import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard'; 
import AllTrips from './Pages/AllTrips'; 
import './App.css';


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/Dashboard' Component={Dashboard} /> 
        <Route path='/AllTrips' Component={AllTrips} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
