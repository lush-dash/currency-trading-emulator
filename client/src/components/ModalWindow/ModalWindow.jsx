import React, { useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from '../../redux/actions/ordersActions';
import { closeModal } from '../../redux/actions/modalActions';

function ModalWindow() {
  const modal = useSelector((state) => state.modal);
  const preOrder = useSelector((state) => state.preOrder);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  function okClickHandler() {
    dispatch(closeModal());
    const newOrder = {
      ...preOrder,
      volume: input,
      timestamp: new Date().toLocaleString(),
    };
    dispatch(addOrder(newOrder));
    setInput('');
  }

  function cancelClickHandler() {
    dispatch(closeModal());
    setInput('');
  }

  return (
    <div>
      <Modal className="modal-window" isOpen={modal} unmountOnClose>
        <ModalHeader>Make order</ModalHeader>
        <ModalBody>
          <div className="modal-content-container">
            <span className={preOrder.type === 'SELL' ? 'red' : 'green'}>{preOrder.type}</span>
            <span>{preOrder.price}</span>
            <span>{preOrder.currency}</span>
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
          <Button color="secondary" onClick={cancelClickHandler}>
            Cancel
          </Button>
          {' '}
          <Button
            disabled={!Number(input) > 0}
            color="primary"
            onClick={okClickHandler}
          >
            OK
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalWindow;
