const inrInputElement = document.getElementById('inr');
const usdInputElement = document.getElementById('usd');
const currentRateElement = document.getElementById('current-rate');

inrInputElement.addEventListener('keyup', async (e) => {
  const rate = await getLatestConversionRate();
  usdInputElement.value = ((+e.target.value * 10) / rate).toFixed(2);
});

inrInputElement.addEventListener('focus', async (e) => {
  const rate = await getLatestConversionRate();
  usdInputElement.value = ((+e.target.value * 10) / rate).toFixed(2);
});

usdInputElement.addEventListener('keyup', async (e) => {
  const rate = await getLatestConversionRate();
  inrInputElement.value = (+(e.target.value * 0.1 * rate)).toFixed(2);
});

usdInputElement.addEventListener('focus', async (e) => {
  const rate = await getLatestConversionRate();
  if (e.target.value)
    inrInputElement.value = (+(e.target.value * 0.1 * rate)).toFixed(2);
});

const getLatestConversionRate = async () => {
  const data = await fetch(
    'https://api.exchangeratesapi.io/latest?base=USD&symbols=INR'
  );
  const rate = await data.json();
  currentRateElement.innerText = `$${rate.rates.INR.toFixed(2)}`;
  return rate.rates.INR.toFixed(2);
};

getLatestConversionRate();
