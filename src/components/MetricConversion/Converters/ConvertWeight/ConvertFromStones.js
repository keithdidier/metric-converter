import React, { Component } from 'react';
import { Col, Row, Form, ListGroup } from 'react-bootstrap';

class ConvertFromStones extends Component {
  state = {
    pounds: '',
    ounces: '',
    kilograms: '',
    grams: ''
  };

  convertFromStones = e => {
    this.setState({
      kilograms: parseFloat(e.target.value / 2.2046).toFixed(2),
      ounces: parseFloat(e.target.value * 16).toFixed(2),
      grams: parseFloat(e.target.value / 0.0022046).toFixed(2),
      pounds: parseFloat(e.target.value * 2.2046).toFixed(2)
    });
  };

  render() {
    return (
      <Form>
        <Row>
          <Col className="mb-3">
            <Form.Label>
              Convert from <strong>Stones</strong> to other Measurements
            </Form.Label>
            <Form.Control
              onChange={this.convertFromStones}
              name="pounds"
              placeholder="0.00"
              type="number"
            />
          </Col>
        </Row>
        <ListGroup className="mb-5">
          <ListGroup.Item>Kilograms: {this.state.kilograms}</ListGroup.Item>
          <ListGroup.Item>Ounces: {this.state.ounces}</ListGroup.Item>
          <ListGroup.Item>Grams: {this.state.grams}</ListGroup.Item>
          <ListGroup.Item>Pounds: {this.state.pounds}</ListGroup.Item>
        </ListGroup>
      </Form>
    );
  }
}

export default ConvertFromStones;
