import React, { useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const NearbyServices = () => {
  const [services, setServices] = useState([]);

  // Fetch nearby services from Google Places API
  // setServices([...fetchedServices]);

  return (
    <div className="container mt-5">
      <h2>Nearby Services</h2>
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
