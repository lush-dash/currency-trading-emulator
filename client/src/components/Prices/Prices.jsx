import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ModalWindow from '../ModalWindow/ModalWindow';
import { setRandomPrices } from './setRandomPrices';

export default function Prices({ currencies, input }) {
  const [modalState, setModalState] = useState(false);
  const [prices, setPrices] = useState(setRandomPrices(currencies));
  const currentTab = useSelector((state) => state.currentTab);
  const [, setMyInterval] = useState(null);

  function closeModal() {
    setModalState(false);
  }

  function renewRandomPrices() {
    setPrices(setRandomPrices(currencies));
  }

  useEffect(() => {
    if (currentTab === '1') {
      setMyInterval(setInterval(renewRandomPrices, 5000));
    } else {
      setMyInterval((prev) => clearInterval(prev));
    }
  }, [currentTab]);

  return (
    <>
      <div className="prices-container">
        <button type="button" className="price green" onClick={() => { setModalState(true); }}>
          <p>BUY</p>
          <p>{prices[Number(input)].buy}</p>
        </button>
        <button type="button" className="price red" onClick={() => { setModalState(true); }}>
          <p>SELL</p>
          <p>{prices[Number(input)].sell}</p>
        </button>
      </div>
      <ModalWindow modalState={modalState} closeModal={closeModal} />
    </>
  );
}
