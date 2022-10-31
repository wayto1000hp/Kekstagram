import {getRandomArrayElement, getRandomNumber,MIN_LENGTH,MAX_LENGTH} from './util.js';
const DESCRIPTION = [
  'Описание фотографии 1',
  'Описание фотографии 2',
  'Описание фотографии 3',
  'Описание фотографии 4',
  'Описание фотографии 5',
  'Описание фотографии 6',
];
const createPhoto = (idx) => ({
  id: idx + 1,
  url: `photos/${idx + 1}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomNumber(15, 200),
  comments: getRandomNumber(MIN_LENGTH, MAX_LENGTH),
});
const arrayPhotos = Array.from({length: 25}, (_,index) => createPhoto(index));
export {arrayPhotos};

