import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import AccidentReport from './Components/AccidentReport';
import WeatherAlert from './Components/WeatherAlert';
import NearbyServices from './Components/NearbyServices';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/report" element={<AccidentReport />} />
          <Route path="/weather-alerts" element={<WeatherAlert />} />
          <Route path="/nearby-services" element={<NearbyServices />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
