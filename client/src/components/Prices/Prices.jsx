import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRandomPrices } from './setRandomPrices';
import { openModal } from '../../redux/actions/modalActions';
import { setPreOrder } from '../../redux/actions/preOrderActions';
import './index.css';

export default function Prices({ currencies, input }) {
  const [prices, setPrices] = useState(setRandomPrices(currencies));
  const [, setMyInterval] = useState(null);
  const currentTab = useSelector((state) => state.currentTab);
  const dispatch = useDispatch();

  function renewRandomPrices() {
    setPrices(setRandomPrices(currencies));
  }

  function clickHandler(type) {
    dispatch(openModal());
    const newPreOrder = {
      type,
      price: prices[Number(input)][type.toLowerCase()],
      currency: currencies[Number(input)],
    };
    dispatch(setPreOrder(newPreOrder));
  }

  useEffect(() => {
    if (currentTab === '1') {
      setMyInterval(setInterval(renewRandomPrices, 10000));
    } else {
      setMyInterval((prev) => clearInterval(prev));
    }
  }, [currentTab]);

  return (
    <div className="prices-container">
      <button
        type="button"
        className="price green"
        onClick={() => clickHandler('BUY')}
      >
        <p>BUY</p>
        <p>{prices[Number(input)].buy}</p>
      </button>
      <button
        type="button"
        className="price red"
        onClick={() => clickHandler('SELL')}
      >
        <p>SELL</p>
        <p>{prices[Number(input)].sell}</p>
      </button>
    </div>
  );
}
