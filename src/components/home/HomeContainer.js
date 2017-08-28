import React from "react";
import { connect } from "react-redux";
import { Row, Col, Panel, Image } from "react-bootstrap";

// Home page component
export class HomeContainer extends React.Component {

  render() {
    return (
      <Panel>
        <Row>
          <Col xs={12} md={6}>
            <h2>Start Here</h2>
            <p>This is a good place to start building your React app.</p>
          </Col>
          <Col xs={12} md={6}>
            <Image src="https://cdn-images-1.medium.com/max/1200/1*m_q0YKyWw7Qqbh-qklinTw.png" responsive />
          </Col>
        </Row>
      </Panel>
    );
  }
}

export default connect()(HomeContainer);
