import React, { Component } from 'react';
import { Col, Row, Form, ListGroup } from 'react-bootstrap';

class ConvertFromCelsius extends Component {
  state = {
    fahrenheit: '',
    kelvin: ''
  };

  convertFromCelsius = e => {
    this.setState({
      fahrenheit: parseFloat(e.target.value * 1.8 + 32).toFixed(0),
      kelvin: parseFloat(e.target.value - 0 + 273.15).toFixed(0)
    });

    if (e.target.value === '') {
      this.setState({
        fahrenheit: '',
        kelvin: ''
      });
    }
  };

  render() {
    return (
      <Form>
        <Row>
          <Col className="mb-3">
            <Form.Label>
              Convert from <strong>Celsius</strong> to other Measurements
            </Form.Label>
            <Form.Control
              onChange={this.convertFromCelsius}
              placeholder="Celsius"
              type="number"
            />
          </Col>
        </Row>
        <ListGroup className="mb-3">
          <ListGroup.Item>Fahrenheit: {this.state.fahrenheit}</ListGroup.Item>
          <ListGroup.Item>Kelvin: {this.state.kelvin}</ListGroup.Item>
        </ListGroup>
      </Form>
    );
  }
}

export default ConvertFromCelsius;
