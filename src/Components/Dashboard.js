import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Dashboard</h2>
      <div className="row">
        <div className="col-md-6">
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Weather Alerts</Card.Title>
              <Card.Text>No severe weather alerts at the moment.</Card.Text>
              <Button variant="primary" href="/weather-alerts">View Details</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6">
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Your Location</Card.Title>
              <Card.Text>Latitude: 37.7749, Longitude: -122.4194</Card.Text>
              <Button variant="primary" href="/nearby-services">Find Nearby Services</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
