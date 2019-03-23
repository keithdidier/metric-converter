import React from 'react';
import { Card, Col, Row, Form } from 'react-bootstrap';

export default function ConvertLength() {
  return (
    <div>
      <Card>
        <Card.Header>Convert Length</Card.Header>
        <Card.Body>
          <Card.Text>
            Type a value in any of the fields to convert between Length
            measurements.
          </Card.Text>
          <Form>
            <Row>
              <Col sm={6}>
                <Form.Group>
                  <Form.Label>Feet</Form.Label>
                  <Form.Control placeholder="Feet" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Inches</Form.Label>
                  <Form.Control placeholder="Inches" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Yards</Form.Label>
                  <Form.Control placeholder="Yards" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Miles</Form.Label>
                  <Form.Control placeholder="Miles" />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group>
                  <Form.Label>Meters</Form.Label>
                  <Form.Control placeholder="Meters" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>cm</Form.Label>
                  <Form.Control placeholder="cm" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Kilometers</Form.Label>
                  <Form.Control placeholder="Kilometers" />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
