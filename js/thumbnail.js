const pictures = document.querySelector('.pictures');
const template = document.querySelector('#picture').content.querySelector('.picture');

const getThumbnail = (usersPictures) => {
  const picturesFragment = document.createDocumentFragment();
  usersPictures.forEach(({ url, likes, comments }) => {
    const imgElement = template.cloneNode(true);
    imgElement.querySelector('.picture__img').src = url;
    imgElement.querySelector('.picture__likes').textContent = likes;
    imgElement.querySelector('.picture__comments').textContent = comments;
    picturesFragment.appendChild(imgElement);
  });

  pictures.appendChild(picturesFragment);
};

export default getThumbnail;


