import React, { memo } from 'react';
import {
  Table,
} from 'reactstrap';
import './index.css';
import { useSelector } from 'react-redux';

function Archive() {
  const orders = useSelector((state) => state.orders);
  return (
    <Table>
      <thead>
        <tr className="top-row">
          <th>
            Side
          </th>
          <th>
            Price
          </th>
          <th>
            Instrument
          </th>
          <th>
            Volume
          </th>
          <th>
            Timestamp
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.map((el) => (
          <tr key={el.timestamp}>
            <th className={el.type === 'SELL' ? 'red' : 'green'} scope="row">{el.type}</th>
            <td>{el.price}</td>
            <td>{el.currency}</td>
            <td>{el.volume}</td>
            <td>{el.timestamp}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default memo(Archive);
