const getRates = (base) => {
  return fetch(`https://api.exchangeratesapi.io/latest?base=${base}`);
};
const getValue = (first, second) => {
  return fetch(
    `https://api.exchangeratesapi.io/latest?symbols=${first},${second}`
  );
};
export { getRates, getValue };
