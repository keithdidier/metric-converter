import React from 'react';
import { Card, Col, Row, Form } from 'react-bootstrap';

export default function ConvertTemperature() {
  return (
    <div>
      <Card>
        <Card.Header className="">Convert Temperature</Card.Header>
        <Card.Body>
          <Card.Text>
            Type a value in any of the fields to convert between temperature
            measurements.
          </Card.Text>
          <Form>
            <Row>
              <Col sm={6}>
                <Form.Group>
                  <Form.Label>Fahrenheit</Form.Label>
                  <Form.Control placeholder="Fahrenheit" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Kelvin</Form.Label>
                  <Form.Control placeholder="Knots" />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group>
                  <Form.Label>Celsius</Form.Label>
                  <Form.Control placeholder="Celsius" />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
