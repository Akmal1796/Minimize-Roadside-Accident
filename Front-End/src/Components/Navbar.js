import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {
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
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
