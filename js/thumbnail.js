import arrayPhotos from './data.js';

const getThumbnail = () => {
  const pictures = document.querySelector('.pictures');
  const template = document.querySelector('#picture').content.querySelector('.picture');
  const picturesFragment = document.createDocumentFragment();

  arrayPhotos.forEach(({url, comments, likes}) => {
    const imgElement = template.cloneNode(true);
    imgElement.querySelector('.picture__img').src = url;
    imgElement.querySelector('.picture__comments').textContent = comments;
    imgElement.querySelector('.picture__likes').textContent = likes;
    picturesFragment.appendChild(imgElement);
  });

  pictures.appendChild(picturesFragment);
};

export default getThumbnail;
