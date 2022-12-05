import React, { useEffect, useState } from 'react';
import {
  CardTitle, Spinner,
} from 'reactstrap';
import './index.css';

export default function Clock() {
  const [clock, setClock] = useState(null);

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClock(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <CardTitle className="time" tag="h5">
      { clock || (<Spinner />)}
    </CardTitle>

  );
}
