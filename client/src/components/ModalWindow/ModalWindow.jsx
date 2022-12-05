import React from 'react';
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

function ModalWindow({ modalState, closeModal }) {
  return (
    <div>
      <Modal className="modal-window" isOpen={modalState} unmountOnClose>
        <ModalHeader>Make order</ModalHeader>
        <ModalBody>
          <div className="modal-content-container">
            <span>SELL</span>
            <span>1.5746</span>
            <span>GBP/USD</span>
          </div>
          <div className="volume-input-container">
            <Label for="volume">Volume</Label>
            <Input
              id="volume"
              type="text"
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => closeModal()}>
            Cancel
          </Button>
          {' '}
          <Button color="primary" onClick={() => closeModal()}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalWindow;
