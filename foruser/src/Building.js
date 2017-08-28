import React, {Component} from 'react';
import {Row, Col, Carousel} from 'antd';

import BuyBuildingInputForm from './BuyBuildingInputForm';

class Building extends Component {
  render() {
    return (
      <div>
        <Row gutter={32}>
          <Col span={16}>
            <Carousel>
              <div className="custom-image">
                <img alt="Фотка" width="100%"
                     src="http://nalichniki.com/blog/wp-content/uploads/2016/06/Vyazniki_127-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg"/>
              </div>
              <div className="custom-image">
                <img alt="Фотка" width="100%" src="http://nalichniki.com/blog/wp-content/uploads/2017/08/img_7157.jpg"/>
              </div>
              <div><h3>Красивая картинка 3</h3></div>
              <div><h3>Красивая картинка 4</h3></div>
            </Carousel>
          </Col>
          <Col span={8}>
            <div>
              <h1>$10000000</h1>
              <p>Адрес такой-то</p>
            </div>
            <BuyBuildingInputForm/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Building;
