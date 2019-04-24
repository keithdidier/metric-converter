import React from 'react';
import { Card, Col, Row, Form } from 'react-bootstrap';
import ConvertFromFahrenheit from './ConvertFromFahrenheit';
import ConvertFromCelsius from './ConvertFromCelsius';
import ConvertFromKelvin from './ConvertFromKelvin';

export default function ConvertTemperature() {
  return (
    <div>
      <Card>
        <Card.Header className="">Temperature Converter</Card.Header>
        <Card.Body>
          <Card.Text>
            Type a value in any of the fields to convert between temperature
            measurements.
          </Card.Text>
          <ConvertFromFahrenheit />
          <ConvertFromCelsius />
          <ConvertFromKelvin />
        </Card.Body>
      </Card>
    </div>
  );
}
