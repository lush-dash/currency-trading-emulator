export function getRandom(min, max) {
  return (Math.random() * (max - min) + min).toFixed(4);
}

export function setRandomPrices(arr) {
  return arr.map(() => ({
    sell: getRandom(0.1, 3),
    buy: getRandom(0.1, 3),
  }));
}
