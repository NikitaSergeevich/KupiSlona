import React, {Component} from 'react';
import {Button, Modal, Form, Input, Radio, Select} from 'antd';

const FormItem = Form.Item;

const CollectionCreateForm = Form.create()(
  (props) => {
    const { visible, onCancel, onCreate, form } = props;
    const { getFieldDecorator } = form;
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '7',
    })(
      <Select style={{ width: 60 }}>
        <Option value="7">+7</Option>
        <Option value="8">8</Option>
      </Select>
    );

    return (
      <Modal
        visible={visible}
        title="Создаёт новый ДДУ?"
        okText="Создать контракт"
        cancelText="Отменить"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout="vertical">
          <FormItem label="Кто такой?">
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Пжста представьтесь' }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem label="Чем знаменит?">
            {getFieldDecorator('description')(<Input type="textarea" />)}
          </FormItem>
          <FormItem label="Номер телефона">
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: 'Надо номер телефона ввести' }],
            })(
              <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            )}
          </FormItem>
          <FormItem className="collection-create-form_last-form-item">
            {getFieldDecorator('modifier', {
              initialValue: 'public',
            })(
              <Radio.Group>
                <Radio value="public">Уведомлять</Radio>
                <Radio value="private">Не уведомлять</Radio>
              </Radio.Group>
            )}
          </FormItem>
        </Form>
      </Modal>
    );
  }
);

class BuyBuildingInputForm extends Component {
  state = {
    visible: false,
  };
  showModal = () => {
    this.setState({ visible: true });
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  handleCreate = () => {
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };
  saveFormRef = (form) => {
    this.form = form;
  };
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>Купить слона</Button>
        <CollectionCreateForm
          ref={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default BuyBuildingInputForm;
