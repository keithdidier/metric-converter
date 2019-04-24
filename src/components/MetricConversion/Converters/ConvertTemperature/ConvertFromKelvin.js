import React, { Component } from 'react';
import { Col, Row, Form, ListGroup } from 'react-bootstrap';

class ConvertFromKelvin extends Component {
  state = {
    celsius: '',
    kelvin: ''
  };

  convertFromKelvin = e => {
    this.setState({
      celsius: parseFloat(e.target.value - 273.15).toFixed(0),
      fahrenheit: parseFloat((e.target.value - 273.15) * 1.8 + 32).toFixed(0)
    });

    if (e.target.value === '') {
      this.setState({
        celsius: '',
        fahrenheit: ''
      });
    }
  };

  render() {
    return (
      <Form>
        <Row>
          <Col className="mb-3">
            <Form.Label>
              Convert from <strong>Kelvin</strong> to other Measurements
            </Form.Label>
            <Form.Control
              onChange={this.convertFromKelvin}
              name="kelvin"
              placeholder="Kelvin"
              type="number"
            />
          </Col>
        </Row>
        <ListGroup className="mb-3">
          <ListGroup.Item>Celsius: {this.state.celsius}</ListGroup.Item>
          <ListGroup.Item>Fahrenheit: {this.state.fahrenheit}</ListGroup.Item>
        </ListGroup>
      </Form>
    );
  }
}

export default ConvertFromKelvin;
