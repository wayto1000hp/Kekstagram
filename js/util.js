import { ALERT_SHOW_TIME } from './constants.js';

const showErrorAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '24px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'gray';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const getRandomNumber = (a,b) => {
  if (a < 0 || b < 0 || a > b) {
    return NaN;
  }
  a = Math.ceil(a);
  b = Math.floor(b);
  return Math.floor(Math.random() * (b - a + 1)) + a;
};


const compareLength = (str,maxLength) => str.length < maxLength;

const getRandomArrayElement = (array) => array[getRandomNumber(0,array.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

export { getRandomArrayElement,compareLength,getRandomNumber,isEscapeKey, showErrorAlert };
