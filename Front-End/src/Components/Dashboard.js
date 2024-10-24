import React, { useEffect, useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';

const Dashboard = () => {
  const [location, setLocation] = useState({ lat: 37.7749, lng: -122.4194, altitude: null });
  const [loadingLocation, setLoadingLocation] = useState(true);
  const [address, setAddress] = useState('');
  const [speed, setSpeed] = useState(0);
  const speedLimit = 80;
  const [showCaution, setShowCaution] = useState(false);

  const hardcodedWeatherData = {
    weather: [{ description: "Clear sky" }],
    main: {
      temp: 25,
      humidity: 60,
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newSpeed = Math.floor(Math.random() * 120);
      setSpeed(newSpeed);
      if (newSpeed > speedLimit) {
        setShowCaution(true);
      } else {
        setShowCaution(false);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude, altitude } = position.coords;
          setLocation({
            lat: latitude,
            lng: longitude,
            altitude: altitude ? altitude.toFixed(2) + ' meters' : 'N/A',
          });
          setLoadingLocation(false);

          fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
          )
            .then((response) => response.json())
            .then((data) => setAddress(data.display_name))
            .catch((error) => console.error('Error fetching address:', error));
        },
        (error) => {
          console.error("Error getting location:", error);
          setLoadingLocation(false);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setLoadingLocation(false);
    }
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center">Dashboard</h2>

      <div className="row mb-3">
        <div className="col-md-12">
          <Card>
            <Card.Body>
              <Card.Title>Speed Meter</Card.Title>
              <Card.Text>{`Current Speed: ${speed} km/h`}</Card.Text>
              {showCaution && (
                <Alert variant="warning">
                  Caution: You are exceeding the speed limit of {speedLimit} km/h!
                </Alert>
              )}
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Weather Alerts</Card.Title>
              <Card.Text>
                {`Current Weather: ${hardcodedWeatherData.weather[0].description}`}
              </Card.Text>
              <Card.Text>{`Temperature: ${hardcodedWeatherData.main.temp} °C`}</Card.Text>
              <Card.Text>{`Humidity: ${hardcodedWeatherData.main.humidity}%`}</Card.Text>
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
                  <>
                    <p><strong>Latitude:</strong> {location.lat}</p>
                    <p><strong>Longitude:</strong> {location.lng}</p>
                    <p><strong>Altitude:</strong> {location.altitude}</p>
                    {address && <p><strong>Address:</strong> {address}</p>}
                  </>
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
