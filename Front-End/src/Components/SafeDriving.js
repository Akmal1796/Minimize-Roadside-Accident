import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

const SafeDriving = () => {
  const safetyTips = [
    {
      title: 'Always Wear Seatbelt',
      description: 'Make sure everyone in the vehicle is wearing a seatbelt before you start driving.',
    },
    {
      title: 'Follow Speed Limits',
      description: 'Stick to the speed limits to ensure safe driving for yourself and others on the road.',
    },
    {
      title: 'Avoid Distractions',
      description: 'Do not use your mobile phone or engage in distracting activities while driving.',
    },
    {
      title: 'Never Drive Under Influence',
      description: 'Avoid driving under the influence of alcohol or drugs as it impairs judgment and reaction times.',
    },
    {
      title: 'Maintain Safe Distance',
      description: 'Always maintain a safe distance from the vehicle in front of you to avoid collisions.',
    },
    {
      title: 'Regular Vehicle Maintenance',
      description: 'Ensure that your vehicle is well-maintained with regular checks on brakes, tires, and lights.',
    },
  ];

  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  useEffect(() => {
    setCurrentTipIndex(0);
  }, []);

  const handleNextTip = () => {
    setCurrentTipIndex((prevIndex) => prevIndex + 1);
  };

  const handleDone = () => {
    setCurrentTipIndex(null);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Safe Driving Instructions</h2>

      <div className="row">
        {safetyTips.map((tip, index) => (
          <div className="col-md-4" key={index}>
            <Card className="mb-4" style={currentTipIndex === index ? { border: '2px solid #007bff' } : {}}>
              <Card.Body>
                <Card.Title>{tip.title}</Card.Title>
                <Card.Text>{tip.description}</Card.Text>

                {currentTipIndex === index && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '80px',
                      left: '350px',
                      width: '250px',
                      backgroundColor: '#f8f9fa',
                      padding: '15px',
                      borderRadius: '8px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                      zIndex: 1000,
                    }}
                  >
                    <h5>{tip.title}</h5>
                    <p>{tip.description}</p>
                    {currentTipIndex < safetyTips.length - 1 ? (
                      <Button variant="primary" onClick={handleNextTip}>
                        Next
                      </Button>
                    ) : (
                      <Button variant="success" onClick={handleDone}>
                        Done
                      </Button>
                    )}
                  </div>
                )}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SafeDriving;
