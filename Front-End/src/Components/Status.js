import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const vehicleData = {
  engine: {
    condition: "Good",
    lastRepaired: "2023-05-15",
    usageDuration: "5 months",
  },
  tires: {
    frontLeft: {
      condition: "Worn",
      lastRepaired: "2022-12-01",
      usageDuration: "10 months",
    },
    frontRight: {
      condition: "Good",
      lastRepaired: "2023-03-10",
      usageDuration: "7 months",
    },
    rearLeft: {
      condition: "Good",
      lastRepaired: "2023-06-20",
      usageDuration: "4 months",
    },
    rearRight: {
      condition: "Worn",
      lastRepaired: "2022-11-25",
      usageDuration: "11 months",
    },
  },
  battery: {
    condition: "Good",
    lastRepaired: "2023-04-05",
    usageDuration: "6 months",
  },
  brakes: {
    condition: "Fair",
    lastRepaired: "2023-01-15",
    usageDuration: "9 months",
  },
  oil: {
    lastChanged: "2023-07-10",
    usageDuration: "3 months",
  },
};

const VehicleStatus = () => {
  return (
    <div className="container mt-5" style={{paddingBottom: "100px"}}>
      <h2 className="text-center">Vehicle Status</h2>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Engine</Card.Title>
          <ListGroup>
            <ListGroup.Item>
              <strong>Condition:</strong> {vehicleData.engine.condition}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Last Repaired:</strong> {vehicleData.engine.lastRepaired}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Usage Duration:</strong> {vehicleData.engine.usageDuration}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Tires</Card.Title>
          <ListGroup>
            <ListGroup.Item>
              <strong>Front Left:</strong> {vehicleData.tires.frontLeft.condition}, Last Repaired: {vehicleData.tires.frontLeft.lastRepaired}, Usage: {vehicleData.tires.frontLeft.usageDuration}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Front Right:</strong> {vehicleData.tires.frontRight.condition}, Last Repaired: {vehicleData.tires.frontRight.lastRepaired}, Usage: {vehicleData.tires.frontRight.usageDuration}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Rear Left:</strong> {vehicleData.tires.rearLeft.condition}, Last Repaired: {vehicleData.tires.rearLeft.lastRepaired}, Usage: {vehicleData.tires.rearLeft.usageDuration}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Rear Right:</strong> {vehicleData.tires.rearRight.condition}, Last Repaired: {vehicleData.tires.rearRight.lastRepaired}, Usage: {vehicleData.tires.rearRight.usageDuration}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Battery</Card.Title>
          <ListGroup>
            <ListGroup.Item>
              <strong>Condition:</strong> {vehicleData.battery.condition}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Last Repaired:</strong> {vehicleData.battery.lastRepaired}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Usage Duration:</strong> {vehicleData.battery.usageDuration}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Brakes</Card.Title>
          <ListGroup>
            <ListGroup.Item>
              <strong>Condition:</strong> {vehicleData.brakes.condition}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Last Repaired:</strong> {vehicleData.brakes.lastRepaired}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Usage Duration:</strong> {vehicleData.brakes.usageDuration}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Oil</Card.Title>
          <ListGroup>
            <ListGroup.Item>
              <strong>Last Changed:</strong> {vehicleData.oil.lastChanged}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Usage Duration:</strong> {vehicleData.oil.usageDuration}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default VehicleStatus;