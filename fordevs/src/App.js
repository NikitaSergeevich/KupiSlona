import React, { Component } from 'react';
import { Row, Col, Card, Input, Pagination } from 'antd';

const Search = Input.Search;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: props.initialColor
    };
  }

  componentWillMount() {
    
  }

  render() {
    return (
      <div>
        <Row className='margin_top_10' gutter={16}>
          <Col span={8}>
            <Card title="Card title" bordered={true}>Card content</Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={true}>Card content</Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={true}>Card content</Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={true}>Card content</Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={true}>Card content</Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={true}>Card content</Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
