import React, {Component} from 'react';
import {Row, Col, Card, Input, Pagination} from 'antd';

const Search = Input.Search;

class App extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={24}>
            <Search
              className="full_width"
              placeholder="Здания/доли/прочее?"
              size="large"
              onSearch={value => console.log(value)}
            />
          </Col>
        </Row>
        <Row className='margin_top_40' gutter={16}>
          <Col span={8}>
            <Card title="Новостройки в Москве" bordered={true}>
              <div className="custom-image">
                <img alt="Фото здания" height="auto" width="100%"
                     src="http://www.kvartirimoskva.ru/img/content_img/Statiy5011.jpg"/>
              </div>
              <div className="custom-card">
                <h3>Новый супер-проект</h3>
                <p>$100</p>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Старостройки в Ижевске" bordered={true}>
              <div className="custom-image">
                <img alt="Фотка" width="100%" src="http://izhevsk.ru/forums/icons/forum_pictures/003337/3337274.jpg"/>
              </div>
              <div className="custom-card">
                <h3>Только цокольные этажи?</h3>
                <p>$2000</p>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Растрескавшиеся дома в Иннополисе" bordered={true}>
              <div className="custom-image">
                <a href="/status">
                  <img alt="Фотка" width="100%"
                       src="http://nalichniki.com/blog/wp-content/uploads/2016/06/Vyazniki_127-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg"/>
                </a>
              </div>
              <div className="custom-card">
                <h3>Избушка + ножки</h3>
                <p>$10000000</p>
              </div>
            </Card>
          </Col>
        </Row>
        <Row className='margin_top_10'>
          <Col span={24}>
            <Pagination defaultCurrent={10} total={5000}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
