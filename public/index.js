const inrInputElement = document.getElementById('inr');
const usdInputElement = document.getElementById('usd');
const currentRateElement = document.getElementById('current-rate');

const getConversionValues = async (type, value) => {
  const rate = await getLatestConversionRate();
  if (type === 'inr') {
    usdInputElement.value = ((value * 10) / rate).toFixed(2);
  } else {
    inrInputElement.value = (value * 0.1 * rate).toFixed(2);
  }
};

const getLatestConversionRate = async () => {
  const data = await fetch(
    'https://api.exchangeratesapi.io/latest?base=USD&symbols=INR'
  );
  const rate = await data.json();
  currentRateElement.innerText = `$${rate.rates.INR.toFixed(2)}`;
  return rate.rates.INR.toFixed(2);
};

getLatestConversionRate();

inrInputElement.addEventListener('keyup', (e) =>
  getConversionValues('inr', +e.target.value)
);

inrInputElement.addEventListener('focus', (e) =>
  getConversionValues('inr', +e.target.value)
);

usdInputElement.addEventListener('keyup', (e) =>
  getConversionValues('usd', +e.target.value)
);

usdInputElement.addEventListener('focus', (e) =>
  getConversionValues('usd', +e.target.value)
);
