import React from 'react';
import {
  Card, CardHeader,
} from 'reactstrap';
import Trading from '../Trading/Trading';
import './index.css';

export default function Main() {
  return (
    <Card className="main-card">
      <CardHeader>
        Trading
      </CardHeader>
      <Trading />
    </Card>
  );
}
