import React, {Component} from 'react';
import {Row, Col, Carousel} from 'antd';

import Progress from './Progress';
import BuyBuildingInputForm from './BuyBuildingInputForm';

class Building extends Component {
  render() {
    return (
      <div>
        <Row gutter={32}>
          <Col span={16}>
            <Carousel>
              <div><h3>Красивая картинка 1</h3></div>
              <div><h3>Красивая картинка 2</h3></div>
              <div><h3>Красивая картинка 3</h3></div>
              <div><h3>Красивая картинка 4</h3></div>
            </Carousel>
          </Col>
          <Col span={8}>
            <div>
              <h1>$10000000</h1>
              <p>Адрес такой-то</p>
            </div>
            <div className="margin_top_40">
              <Progress/>
            </div>
            <div className="margin_top_10">
              <BuyBuildingInputForm/>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Building;
