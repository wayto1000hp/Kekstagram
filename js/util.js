const getRandomNumber = (a,b) => {
  if (a < 0 || b < 0 || a > b) {
    return NaN;
  }
  a = Math.ceil(a);
  b = Math.floor(b);
  return Math.floor(Math.random() * (b - a + 1)) + a;
};
getRandomNumber(1,99);
const MIN_LENGTH = 20;
const MAX_LENGTH = 140;
const compareLength = (str,maxLength) => str.length < maxLength;
compareLength('qwerty', MAX_LENGTH);
const getRandomArrayElement = (array) => array[getRandomNumber(0,array.length - 1)];
export {getRandomArrayElement,compareLength,getRandomNumber,MIN_LENGTH,MAX_LENGTH};
