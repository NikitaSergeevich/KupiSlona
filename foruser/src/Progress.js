import React from 'react';
import { Timeline } from 'antd';

const Item = Timeline.Item;

class Progress extends React.Component {
  render() {
    return (
      <Timeline>
        <Item color="green">Заполнить документашку</Item>
        <Item color="green">Подтвердить личность</Item>
        <Item color="red">Подождать ответа застройщика</Item>
        <Item color="gray">Документ внесён в реестр</Item>
        <Item color="gray">Средства в размере 1.2% переведены</Item>
        <Item color="gray">Средства поступили в реестр</Item>
        <Item color="gray">Средства списаны</Item>
        <Item color="gray">ДДУ оплачен</Item>
        <Item color="gray">ДДУ сформирован</Item>
        <Item color="gray">ДДУ зарегестрирован</Item>
      </Timeline>
    )
  }
}

export default Progress;
