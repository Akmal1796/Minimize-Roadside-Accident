import React, { useState } from 'react';
import { Form, Button, Alert, ProgressBar } from 'react-bootstrap';

const AccidentReport = () => {
  const [accidentType, setAccidentType] = useState('');
  const [description, setDescription] = useState('');
  const [location] = useState({ lat: '6.9271', lng: '79.9612' });
  const [showSuccess, setShowSuccess] = useState(false);
  const [progress, setProgress] = useState(0);
  const [emailSent, setEmailSent] = useState(false);
  const [showProgressBar, setShowProgressBar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowSuccess(false);
    setProgress(0);
    setEmailSent(false);
    setShowProgressBar(true);

    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return oldProgress;
        }
        return oldProgress + 10;
      });
    }, 300);

    setTimeout(() => {
      setShowSuccess(true);
      setEmailSent(true);

      setTimeout(() => {
        setShowProgressBar(false);
        resetForm();
      }, 3000);

    }, 3000);
  };

  const resetForm = () => {
    setAccidentType('');
    setDescription('');
    setProgress(0);
  };

  return (
    <div className="container mt-5">
      <h2>Report an Accident</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="accidentType">
          <Form.Label>Accident Type</Form.Label>
          <Form.Control as="select" value={accidentType} onChange={e => setAccidentType(e.target.value)}>
            <option value="">Select Type</option>
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
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" readOnly value={`Lat: ${location.lat}, Lng: ${location.lng}`} />
        </Form.Group>
        <Button variant="primary" type="submit">Report Accident</Button>
      </Form>

      {showProgressBar && (
        <div className="mt-3">
          <ProgressBar now={progress} label={`${progress}%`} />
        </div>
      )}

      {showSuccess && (
        <Alert variant="success" className="mt-3">
          Accident reported successfully! {emailSent && 'A confirmation email has been sent to you.'}
        </Alert>
      )}
    </div>
  );
};

export default AccidentReport;
