import React, { Component } from 'react';
import { Col, Row, Form, ListGroup } from 'react-bootstrap';

class ConvertFromFahrenheit extends Component {
  state = {
    celsius: '',
    kelvin: ''
  };

  convertFromFahrenheit = e => {
    this.setState({
      celsius: parseFloat((e.target.value - 32) / 1.8).toFixed(0),
      kelvin: parseFloat((e.target.value - 32) / 1.8 + 273.15).toFixed(0)
    });

    if (e.target.value === '') {
      this.setState({
        celsius: '',
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
              Convert from <strong>Fahrenheit</strong> to other Measurements
            </Form.Label>
            <Form.Control
              onChange={this.convertFromFahrenheit}
              name="fahrenheit"
              placeholder="Fahrenheit"
              type="number"
            />
          </Col>
        </Row>
        <ListGroup className="mb-3">
          <ListGroup.Item>Celsius: {this.state.celsius}</ListGroup.Item>
          <ListGroup.Item>Kelvin: {this.state.kelvin}</ListGroup.Item>
        </ListGroup>
      </Form>
    );
  }
}

export default ConvertFromFahrenheit;
