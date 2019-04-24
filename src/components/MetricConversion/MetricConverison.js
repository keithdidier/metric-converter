import React, { Component } from 'react';
import { TabContainer, Tabs, Tab, Row, Col, Nav } from 'react-bootstrap';
import WeightConverter from './Converters/ConvertWeight/WeightConverter';
import ConvertTemperature from './Converters/ConvertTemperature/ConvertTemperature';
import ConvertLength from './Converters/ConvertLength';
import ConvertSpeed from './Converters/ConvertSpeed';

class MetricConverison extends Component {
  state = {
    key: 'weight'
  };
  render() {
    return (
      <TabContainer defaultActiveKey="weight">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="weight">Convert Weight</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="temperature">Convert Temperature</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="length">Convert Length</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="speed">Convert Speed</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="weight">
                <WeightConverter />
              </Tab.Pane>
              <Tab.Pane eventKey="temperature">
                <ConvertTemperature />
              </Tab.Pane>
              <Tab.Pane eventKey="length">
                <ConvertLength />
              </Tab.Pane>
              <Tab.Pane eventKey="speed">
                <ConvertSpeed />
              </Tab.Pane>
            </Tab.Content>
          </Col>
          {/* <Tabs
              id="metric-conversion"
              activeKey={this.state.key}
              onSelect={key => this.setState({ key })}
            >
              <Tab eventKey="weight" title="Convert Weight">
                <ConvertWeight />
              </Tab>
              <Tab eventKey="temperature" title="Convert Temperature">
                <ConvertTemperature />
              </Tab>
              <Tab eventKey="length" title="Convert Length">
                <ConvertLength />
              </Tab>
              <Tab eventKey="speed" title="Convert Speed">
                <ConvertSpeed />
              </Tab>
            </Tabs> */}
        </Row>
      </TabContainer>
    );
  }
}

export default MetricConverison;
