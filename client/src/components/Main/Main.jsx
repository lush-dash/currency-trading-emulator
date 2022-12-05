import React from 'react';
import {
  Card,
} from 'reactstrap';
import Tabbar from '../Tabbar/Tabbar';
import './index.css';

export default function Main() {
  return (
    <Card className="main-card">
      <Tabbar />
    </Card>
  );
}
