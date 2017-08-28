import React, { Component } from 'react';
import { Row, Col, Card, Input, Pagination, Button, Modal } from 'antd';
import axios from 'axios';

const Search = Input.Search;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ddu: []
    };
  }

  componentWillMount() {
    var instance = axios.create({
      baseURL: 'http://localhost:3001/api',
      timeout: 1000,
    });
    instance.get('/ddu').then(
      (response) => {
        this.setState({ ddu: response.data });
      }
    )
  }

  onConfirm() {
    Modal.confirm({
      content: (
        <Col>
          Подтрвердите sms-код
          <Input />
        </Col>
      ),
      okText: "Подтвердить",
      cancelText: "Отмена",
      maskClosable: true,
      onCancel: () => { },
      iconType: "",
    });
  }

  render() {
    return (
      <div>
        <Col span={6}>
          {
            this.state.ddu.map((e) => {
              return (
                <Card title="Кооператив озеро" bordered={true}>
                  <Row className='center' gutter={1} type={"flex"} justify={"space-between"}>
                    <Button className='custom-card' size={'small'} type={'type'}
                      onClick={(e) => { this.onConfirm() }}>
                      Подтвердить
                    </Button>
                    <Button className='custom-card'>
                      Перепроверка
                    </Button>
                  </Row>
                </Card>
              )
            })
          }
        </Col>
      </div>
    );
  }
}

export default App;
