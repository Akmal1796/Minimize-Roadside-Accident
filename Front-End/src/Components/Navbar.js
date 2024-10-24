import React, { useState } from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { FaBell } from 'react-icons/fa';
import './nav.css';

const NavigationBar = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const notifications = [
    'Accident reported near Highway 10',
    'Severe weather alert in your area',
    'Nearby roadblock on Main Street',
  ];

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Accident Prevention System</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Dashboard</Nav.Link>
          <Nav.Link href="/report">Report Accident</Nav.Link>
          <Nav.Link href="/weather-alerts">Weather Alerts</Nav.Link>
          <Nav.Link href="/nearby-services">Nearby Services</Nav.Link>
          <Nav.Link href="/safe-driving">Safe Driving</Nav.Link>
          <Nav.Link href="/vehicle-status">Vehicle Status</Nav.Link>
        </Nav>

        <div className="notification-section">
          <FaBell
            onClick={toggleNotifications}
            style={{ color: 'white', fontSize: '1.5em', cursor: 'pointer', marginRight: '15px',
              marginLeft: '400px'
             }}
          />

          {showNotifications && (
            <Dropdown.Menu
              show={showNotifications}
              align="right"
              style={{
                position: 'absolute',
                top: '50px',
                right: '10px',
                width: '300px',
                zIndex: 1000,
                backgroundColor: 'white',
                borderRadius: '5px',
                boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
              }}
            >
              <Dropdown.Header>Recent Notifications</Dropdown.Header>
              {notifications.length > 0 ? (
                notifications.map((notification, index) => (
                  <Dropdown.Item key={index}>
                    {notification}
                  </Dropdown.Item>
                ))
              ) : (
                <Dropdown.Item>No new notifications</Dropdown.Item>
              )}
            </Dropdown.Menu>
          )}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
