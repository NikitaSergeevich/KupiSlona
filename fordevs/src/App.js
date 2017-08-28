import React, {Component} from 'react';
import {Row, Col, Card, Input, Button, Modal} from 'antd';

import history from './index';

class App extends Component {

  onConfirm() {
    Modal.confirm({
      content: (
        <div>
          Подтвердите sms-код
          <Input/>
        </div>
      ),
      okText: "Подтвердить",
      cancelText: "Отмена",
      maskClosable: true,
      iconType: "",
      onOk: () => {
        history.push('/status');
      }
    });
  }

  render() {
    return (
      <Row>
        <Col span={6}>
          <Card title="Ожидает подтверждения" extra={<a href="#">Перепроверка</a>} bordered={true}>
            <Row>
              <Col span={24}>
                <div className="custom-image">
                  <img alt="Фотка" width="100%"
                       src="http://nalichniki.com/blog/wp-content/uploads/2016/06/Vyazniki_127-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg"/>
                </div>
                <div className="custom-card">
                  <h3>Избушка + ножки</h3>
                  <p>$10000000</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Button style={{width: "100%"}} type='primary' size='large' onClick={this.onConfirm}>
                  Подтвердить </Button>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={18}/>
      </Row>
    );
  }
}

export default App;
