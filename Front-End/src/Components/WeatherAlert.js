import React from 'react';
import { Card } from 'react-bootstrap';

const WeatherAlert = () => {
  const currentWeather = {
    alertType: "Current Weather",
    message: "Clear sky, 25°C, Humidity: 60%",
  };

  const pastReports = [
    {
      alertType: "Yesterday's Weather",
      message: "Partly cloudy, 22°C, Humidity: 70%",
    },
    {
      alertType: "2 Days Ago",
      message: "Rainy, 20°C, Humidity: 80%",
    },
    {
      alertType: "3 Days Ago",
      message: "Sunny, 28°C, Humidity: 50%",
    },
    {
      alertType: "4 Days Ago",
      message: "Overcast, 19°C, Humidity: 75%",
    },
    {
      alertType: "5 Days Ago",
      message: "Thunderstorms, 18°C, Humidity: 85%",
    },
    {
      alertType: "6 Days Ago",
      message: "Clear sky, 26°C, Humidity: 55%",
    },
    {
      alertType: "7 Days Ago",
      message: "Foggy, 15°C, Humidity: 90%",
    },
    {
      alertType: "8 Days Ago",
      message: "Windy, 24°C, Humidity: 65%",
    },
    {
      alertType: "9 Days Ago",
      message: "Snowy, 5°C, Humidity: 95%",
    },
    {
      alertType: "10 Days Ago",
      message: "Sunny, 30°C, Humidity: 50%",
    },
  ];

  return (
    <div className="container mt-5" style={{paddingBottom: "100px"}}>
      <h2>Weather Alerts</h2>
      <Card className="mt-3">
        <Card.Body>
          <Card.Title>{currentWeather.alertType}</Card.Title>
          <Card.Text>{currentWeather.message}</Card.Text>
        </Card.Body>
      </Card>

      <h3 className="mt-4">Past Weather Reports</h3>
      {pastReports.length === 0 ? (
        <Card className="mt-3">
          <Card.Body>No past weather reports available.</Card.Body>
        </Card>
      ) : (
        pastReports.map((report, index) => (
          <Card key={index} className="mt-3">
            <Card.Body>
              <Card.Title>{report.alertType}</Card.Title>
              <Card.Text>{report.message}</Card.Text>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

export default WeatherAlert;
