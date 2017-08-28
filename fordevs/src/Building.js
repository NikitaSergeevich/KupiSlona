import React, {Component} from 'react';
import {Row, Col, Carousel, Timeline} from 'antd';

const Item = Timeline.Item;

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
            <div className="margin_top_40">
              <Timeline>
                <Item color="green">Клиент заполнил документашку</Item>
                <Item color="green">Клиент подтвердил личность</Item>
                <Item color="green">ДДУ Подтверждён застройщиком</Item>
                <Item color="green">Документ отправлен в реестр</Item>
                <Item color="red">Средства в размере 1.2% переведены</Item>
                <Item color="gray">Средства поступили в реестр</Item>
                <Item color="gray">Средства списаны</Item>
                <Item color="gray">ДДУ оплачен</Item>
                <Item color="gray">ДДУ сформирован</Item>
                <Item color="gray">ДДУ зарегестрирован</Item>
              </Timeline>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Building;
