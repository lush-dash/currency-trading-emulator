import Prices from '../../models/pricesModel';

export function getRandom(min, max) {
  return (Math.random() * (max - min) + min).toFixed(4);
}

export function setRandomPrices(arr) {
  return arr.map(() => new Prices(getRandom(0.1, 3), getRandom(0.1, 3)));
}
