const inrInputElement = document.getElementById('inr');
const usdInputElement = document.getElementById('usd');

inrInputElement.addEventListener('keyup', (e) => {
  usdInputElement.value = ((+e.target.value * 10) / 72.52).toFixed(2);
});

inrInputElement.addEventListener('focus', (e) => {
  usdInputElement.value = ((+e.target.value * 10) / 72.52).toFixed(2);
});

usdInputElement.addEventListener('keyup', (e) => {
  inrInputElement.value = (+(e.target.value * 0.1 * 72.52)).toFixed(2);
});

usdInputElement.addEventListener('focus', (e) => {
  console.log(e.target.value);
  if (e.target.value)
    inrInputElement.value = (+(e.target.value * 0.1 * 72.52)).toFixed(2);
});
