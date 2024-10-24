import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const AccidentReport = () => {
  const [accidentType, setAccidentType] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState({ lat: '', lng: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (API call to store accident details)
  };

  return (
    <div className="container mt-5">
      <h2>Report an Accident</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="accidentType">
          <Form.Label>Accident Type</Form.Label>
          <Form.Control as="select" value={accidentType} onChange={e => setAccidentType(e.target.value)}>
            <option value="collision">Collision</option>
            <option value="breakdown">Breakdown</option>
            <option value="other">Other</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} value={description} onChange={e => setDescription(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="location">
          <Form.Label>Location (Auto-fetched from Google API)</Form.Label>
          <Form.Control type="text" readOnly value={`Lat: ${location.lat}, Lng: ${location.lng}`} />
        </Form.Group>
        <Button variant="primary" type="submit">Report Accident</Button>
      </Form>
    </div>
  );
};

export default AccidentReport;
