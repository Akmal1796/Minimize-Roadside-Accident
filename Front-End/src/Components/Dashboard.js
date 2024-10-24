import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

const Dashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState({ lat: 37.7749, lng: -122.4194 }); // Default to San Francisco
  const [loadingLocation, setLoadingLocation] = useState(true); // To manage geolocation state

  const API_KEY = 'c4f8532fe7924817a4460028242410';

  const fetchWeatherData = async () => {
    try {
      console.log(`Fetching weather data for location: ${location.lat}, ${location.lng}`);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&appid=${API_KEY}&units=metric`
      );
      console.log("Weather Data:", response.data);
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };


  // Fetch user's location and then weather data
  useEffect(() => {
    // Check if browser supports Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLoadingLocation(false); // Location fetched
        },
        (error) => {
          console.error("Error getting location:", error);
          setLoadingLocation(false); // If location access is denied or error occurs
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setLoadingLocation(false);
    }
  }, []);

  // Fetch weather data once the location is set
  useEffect(() => {
    if (!loadingLocation) {
      fetchWeatherData();
    }
  }, [location, loadingLocation]);

  return (
    <div className="container mt-5">
      <h2 className="text-center">Dashboard</h2>
      <div className="row">
        {/* Weather Alerts Card */}
        <div className="col-md-6">
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Weather Alerts</Card.Title>
              {weatherData ? (
                <>
                  <Card.Text>
                    {`Current Weather: ${weatherData.weather[0].description}`}
                  </Card.Text>
                  <Card.Text>{`Temperature: ${weatherData.main.temp} °C`}</Card.Text>
                  <Card.Text>{`Humidity: ${weatherData.main.humidity}%`}</Card.Text>
                </>
              ) : loadingLocation ? (
                <Card.Text>Fetching location and weather data...</Card.Text>
              ) : (
                <Card.Text>Unable to retrieve weather data.</Card.Text>
              )}
              <Button variant="primary" href="/weather-alerts">
                View Details
              </Button>
            </Card.Body>
          </Card>
        </div>

        {/* Location Card */}
        <div className="col-md-6">
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Your Location</Card.Title>
              <Card.Text>
                {loadingLocation ? (
                  "Fetching location..."
                ) : (
                  `Latitude: ${location.lat}, Longitude: ${location.lng}`
                )}
              </Card.Text>
              <Button variant="primary" href="/nearby-services">
                Find Nearby Services
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
