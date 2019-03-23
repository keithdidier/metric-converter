import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import ConvertFromPounds from './ConvertFromPounds';
import ConvertFromKilograms from './ConvertFromKilograms';
import ConvertFromOunces from './ConvertFromOunces';
import ConvertFromGrams from './ConvertFromGrams';
import ConvertFromStones from './ConvertFromStones';

class ConvertWeight extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Header className="">Weight Converter</Card.Header>
          <Card.Body>
            <Card.Text>
              Type a value in each of the fields to convert between weight
              measurements.
            </Card.Text>
            <ConvertFromPounds />
            <ConvertFromKilograms />
            <ConvertFromOunces />
            <ConvertFromGrams />
            <ConvertFromStones />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ConvertWeight;
