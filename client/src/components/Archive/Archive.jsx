import React, { memo } from 'react';
import {
  Table,
} from 'reactstrap';
import './index.css';

function Archive() {
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
        <tr>
          <th scope="row">
            SELL
          </th>
          <td>
            1.5745
          </td>
          <td>
            USD/GBP
          </td>
          <td>
            100000000000000
          </td>
          <td>
            2022.12.05 15:00:00
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default memo(Archive);
