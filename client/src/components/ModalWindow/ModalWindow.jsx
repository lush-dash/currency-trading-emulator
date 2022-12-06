import React, { memo, useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
} from 'reactstrap';
import './index.css';
import { useDispatch } from 'react-redux';
import { addOrder } from '../../redux/actions/ordersActions';

function ModalWindow({ modalState, closeModal, order }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  function clickHandler() {
    closeModal();
    const confirmedOrder = {
      ...order,
      volume: input,
      timeStamp: new Date().toLocaleString(),
    };
    dispatch(addOrder(confirmedOrder));
    setInput('');
  }

  return (
    <div>
      <Modal className="modal-window" isOpen={modalState} unmountOnClose>
        <ModalHeader>Make order</ModalHeader>
        <ModalBody>
          <div className="modal-content-container">
            <span className={order.type === 'SELL' ? 'red' : 'green'}>{order.type}</span>
            <span>{order.price}</span>
            <span>{order.currency}</span>
          </div>
          <div className="volume-input-container">
            <Label for="volume">Volume</Label>
            <Input
              id="volume"
              type="number"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => closeModal()}>
            Cancel
          </Button>
          {' '}
          <Button
            disabled={!Number(input) > 0}
            color="primary"
            onClick={() => clickHandler()}
          >
            OK
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default memo(ModalWindow);
