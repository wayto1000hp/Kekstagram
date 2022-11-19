import { showErrorAlert, isEscapeKey } from './util.js';
import { addScaleEvent, removeScaleEvent, resetScale } from './image-scale.js';
import { resetEffect, addChangeEvent, removeChangeEvent } from './effects.js';
import { sendData } from './api.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const cancelUpload = document.querySelector('#upload-cancel');
const imgButtonSubmit = document.querySelector('.img-upload__submit');

const closeModal = () => {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeydown);
  cancelUpload.removeEventListener('click', onCancelUploadClick);
  resetScale();
  resetEffect();
  removeScaleEvent();
  removeChangeEvent();
  uploadForm.reset();
  uploadFile.value = '';
};
const openModal = () => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener ('keydown', onEscKeydown);
  cancelUpload.addEventListener('click', onCancelUploadClick);
  resetScale();
  addScaleEvent();
  addChangeEvent();
};

function onEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
}
function onCancelUploadClick () {
  closeModal();
}
const onUploadFileChange = () => {
  openModal();
};
const activateUploadFile = () => {uploadFile.addEventListener('change', onUploadFileChange);
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
};
uploadForm.addEventListener('submit', onFormSubmit);

const blockSubmitButton = () => {
  imgButtonSubmit.disabled = true;
  imgButtonSubmit.textContent = 'Фотография загружается';
};

const unblockSubmitButton = () => {
  imgButtonSubmit.disabled = false;
  imgButtonSubmit.textContent = 'Опубликовать';
};

const setUserFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    blockSubmitButton();
    const formData = new FormData(evt.target);
    sendData(
      () => {
        onSuccess();
        showErrorAlert('Успешная загрузка фото');
        unblockSubmitButton();
      },
      () => {
        showErrorAlert('Произошла ошибка при отправке данных.');
        unblockSubmitButton();
      },
      formData,
    );
  });
};

export { activateUploadFile, setUserFormSubmit, closeModal };

