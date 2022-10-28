const getSum = (a,b) => {
  if (a < 0 || b < 0 || a > b) {
    return NaN;
  }
  a = Math.ceil(a);
  b = Math.floor(b);
  return Math.floor(Math.random() * (b - a + 1)) + a;
};
getSum(1,99);
const MAX_LENGTH = 140;
const compareLength = (str,maxLength) => str.length < maxLength;
compareLength('qwerty', MAX_LENGTH);

const DESCRIPTION = [
  'Описание фотографии 1',
  'Описание фотографии 2',
  'Описание фотографии 3',
  'Описание фотографии 4',
  'Описание фотографии 5',
  'Описание фотографии 6',
];

const getRandomArrayElement = (array) => array[getSum(0,array.length - 1)];

const createPhoto = (idx) => ({
  id: idx + 1,
  url: `photos/${idx + 1}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getSum(15, 200),
  comments: getSum(0, 200),
});

const arrayPhotos = Array.from({length: 25}, (_,index) => createPhoto(index));

// eslint-disable-next-line no-console
console.log(arrayPhotos);
