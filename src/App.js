import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard'; 
import AllTrips from './Pages/AllTrips'; 
import MenuPage from './Pages/MenuPage';
import CityPage from './Components/CityPage';
import CarPage from './Components/CarPage';
import TripsPage from './Components/TripsPage';
import TripPassengerPage from './Components/TripPassengerPage';
import SettingsPage from './Components/SettingsPage';
import './App.css';


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/Dashboard' Component={Dashboard} /> 
        <Route path='/AllTrips' Component={AllTrips} />
        <Route path='/Menu' Component={MenuPage} /> 
        <Route path='/Car' Component={CarPage} />
        <Route path='/City' Component={CityPage} /> 
        <Route path='/Trips' Component={TripsPage} />
        <Route path='/Trip-passenger' Component={TripPassengerPage} />
        <Route path='/Settings' Component={SettingsPage} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
