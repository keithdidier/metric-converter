import React, { Component } from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import MetricConversion from './components/MetricConversion/MetricConverison';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" variant="dark" bg="primary">
          <Container>
            <Navbar.Brand>Metric Converter</Navbar.Brand>
          </Container>
        </Navbar>
        <Container>
          <Row>
            <Col>
              <div className="mt-5">
                <MetricConversion />
              </div>
            </Col>
          </Row>
          <footer className="mt-5">
            <hr />
            <p className="text-center text-muted p-3">
              Keith Didier &copy; 2019
            </p>
          </footer>
        </Container>
      </div>
    );
  }
}

export default App;
