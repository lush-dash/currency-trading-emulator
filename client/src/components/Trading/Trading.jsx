import React, { memo, useState } from 'react';
import {
  CardBody, Input,
} from 'reactstrap';
import Clock from '../Clock/Clock';
import Prices from '../Prices/Prices';
import './index.css';

function Trading() {
  const currencies = ['GBP/USD', 'EUR/GBP', 'EUR/USD'];
  const [input, setInput] = useState('0');

  return (
    <CardBody className="content-container">
      <Clock />
      <Input
        id="select"
        name="select"
        type="select"
        value={input}
        onChange={(e) => { setInput(e.target.value); }}
      >
        {currencies.map((el, i) => (<option value={i} key={el}>{el}</option>))}
      </Input>
      <Prices currencies={currencies} input={input} />
    </CardBody>
  );
}

export default memo(Trading);
