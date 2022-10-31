import {getRandomArrayElement, getRandomNumber} from './util.js';
import {descriptions, MIN_LENGTH, MAX_LENGTH} from './constants.js';

const createPhoto = (idx) => ({
  id: idx + 1,
  url: `photos/${idx + 1}.jpg`,
  description: getRandomArrayElement(descriptions),
  likes: getRandomNumber(15, 200),
  comments: getRandomNumber(MIN_LENGTH, MAX_LENGTH),
});
const arrayPhotos = Array.from({length: 25}, (_,index) => createPhoto(index));
export {arrayPhotos};

