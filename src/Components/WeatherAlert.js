import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const WeatherAlert = () => {
  const [alerts, setAlerts] = useState([]);

  // Fetch weather alerts from the API
  // setAlerts([...fetchedAlerts]);

  return (
    <div className="container mt-5">
      <h2>Weather Alerts</h2>
      {alerts.length === 0 ? (
        <Card className="mt-3">
          <Card.Body>No severe weather alerts in your area.</Card.Body>
        </Card>
      ) : (
        alerts.map((alert, index) => (
          <Card key={index} className="mt-3">
            <Card.Body>
              <Card.Title>{alert.alertType}</Card.Title>
              <Card.Text>{alert.message}</Card.Text>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

export default WeatherAlert;
