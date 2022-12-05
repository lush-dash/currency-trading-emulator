import React, { useState } from 'react';
import {
  CardBody, Input,
} from 'reactstrap';
import Clock from '../Clock/Clock';
import ModalWindow from '../ModalWindow/ModalWindow';
import './index.css';

export default function Trading() {
  const [modalState, setModalState] = useState(false);
  const currencies = ['GBP/USD', 'EUR/GBP', 'EUR/USD'];

  function closeModal() {
    setModalState(false);
  }
  return (
    <>
      <CardBody className="content-container">
        <Clock />
        <Input
          id="select"
          name="select"
          type="select"
        >
          {currencies.map((el) => (<option key={el}>{el}</option>))}
        </Input>
        <div className="prices-container">
          <button type="button" className="price green" onClick={() => { setModalState(true); }}>
            <p>BUY</p>
            <p>1.5766</p>
          </button>
          <button type="button" className="price red" onClick={() => { setModalState(true); }}>
            <p>SELL</p>
            <p>1.5745</p>
          </button>
        </div>
      </CardBody>
      <ModalWindow modalState={modalState} closeModal={closeModal} />
    </>
  );
}
