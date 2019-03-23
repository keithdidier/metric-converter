import React from 'react';
import { Card, Col, Row, Form } from 'react-bootstrap';

export default function ConvertSpeed() {
  return (
    <div>
      <Card>
        <Card.Header>Convert Speed</Card.Header>
        <Card.Body>
          <Card.Text>
            Type a value in any of the fields to convert between speed
            measurements.
          </Card.Text>
          <Form>
            <Row>
              <Col sm={6}>
                <Form.Group>
                  <Form.Label>MPH</Form.Label>
                  <Form.Control placeholder="MPH" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Knots</Form.Label>
                  <Form.Control placeholder="Knots" />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group>
                  <Form.Label>KPH</Form.Label>
                  <Form.Control placeholder="KPH" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Mach</Form.Label>
                  <Form.Control placeholder="Mach" />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
