import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const NearbyServices = () => {
  const services = [
    {
      name: "Colombo General Hospital",
      type: "Hospital",
      rating: 4.5,
    },
    {
      name: "Lanka Hospitals",
      type: "Hospital",
      rating: 4.2,
    },
    {
      name: "Ceylon Garage",
      type: "Garage",
      rating: 4.0,
    },
    {
      name: "Auto Care Garage",
      type: "Garage",
      rating: 4.3,
    },
    {
      name: "Colombo Emergency Response",
      type: "Emergency Responder",
      rating: 4.7,
    },
    {
      name: "Sri Lanka Red Cross Society",
      type: "Emergency Responder",
      rating: 4.6,
    },
    {
      name: "Western Province Teaching Hospital",
      type: "Hospital",
      rating: 4.1,
    },
    {
      name: "Smart Auto Repairs",
      type: "Garage",
      rating: 4.4,
    },
  ];

  return (
    <div className="container mt-5">
      <h2>Nearby Services in Colombo</h2>
      {services.length === 0 ? (
        <Card className="mt-3">
          <Card.Body>No nearby services found.</Card.Body>
        </Card>
      ) : (
        <ListGroup>
          {services.map((service, index) => (
            <ListGroup.Item key={index}>
              <strong>{service.name}</strong> - {service.type} - Rating: {service.rating}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default NearbyServices;
