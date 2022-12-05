import React, { useEffect, useState } from 'react';
import {
  CardTitle,
} from 'reactstrap';

export default function Clock() {
  const [clock, setClock] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClock(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <CardTitle className="time" tag="h5">
      {clock}
    </CardTitle>
  );
}
