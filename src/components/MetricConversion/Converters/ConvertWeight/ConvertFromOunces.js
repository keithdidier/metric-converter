import React, { Component } from 'react';
import { Col, Row, Form, ListGroup } from 'react-bootstrap';

class ConvertFromOunces extends Component {
  state = {
    stones: '',
    kilograms: '',
    pounds: '',
    grams: ''
  };

  convertFromOunces = e => {
    this.setState({
      pounds: parseFloat(e.target.value * 0.0625).toFixed(2),
      kilograms: parseFloat(e.target.value / 35.274).toFixed(2),
      grams: parseFloat(e.target.value / 0.035274).toFixed(2),
      stones: parseFloat(e.target.value * 0.0044643).toFixed(2)
    });
  };

  render() {
    return (
      <Form>
        <Row>
          <Col className="mb-3">
            <Form.Label>
              Convert from <strong>Ounces</strong> to other Measurements
            </Form.Label>
            <Form.Control
              onChange={this.convertFromOunces}
              name="pounds"
              placeholder="0.00"
              type="number"
            />
          </Col>
        </Row>
        <ListGroup className="mb-3">
          <ListGroup.Item>Pounds: {this.state.pounds}</ListGroup.Item>
          <ListGroup.Item>Kilograms: {this.state.kilograms}</ListGroup.Item>
          <ListGroup.Item>Grams: {this.state.grams}</ListGroup.Item>
          <ListGroup.Item>Stones: {this.state.stones}</ListGroup.Item>
        </ListGroup>
      </Form>
    );
  }
}

export default ConvertFromOunces;
