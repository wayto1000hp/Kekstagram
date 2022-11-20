import { isEscapeKey } from './util.js';
import { addScaleEvent, removeScaleEvent, resetScale } from './image-scale.js';
import { resetEffect, addChangeEvent, removeChangeEvent } from './effects.js';
import { sendData } from './api.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const cancelUpload = document.querySelector('#upload-cancel');
const imgButtonSubmit = document.querySelector('.img-upload__submit');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');

const closeModal = () => {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeydown);
  cancelUpload.removeEventListener('click', onCancelUploadClick);
  uploadForm.removeEventListener('submit', onFormSubmit);
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
  uploadForm.addEventListener('submit', onFormSubmit);
  resetScale();
  addScaleEvent();
  addChangeEvent();
};
const onErrorButtonClick = () => {
  hideMessage();
};

const showSuccessMessage = () => {
  const successMessageElement = successMessageTemplate.cloneNode(true);
  document.addEventListener('keydown', onEscKeydown);
  document.addEventListener('click', onErrorButtonClick);
  document.querySelector('body').append(successMessageElement);
};

const showErrorMessage = () => {
  const errorMessageElement = errorMessageTemplate.cloneNode(true);
  document.addEventListener('keydown', onEscKeydown);
  errorMessageElement.querySelector('.error__button').addEventListener('click', onEscKeydown);
  document.querySelector('body').append(errorMessageElement);
};

function hideMessage () {
  const messageElement = document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  document.removeEventListener('keydown', onEscKeydown);
  document.removeEventListener('click', onErrorButtonClick);
}

function onEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideMessage();
    closeModal();
    document.removeEventListener('keydown', onEscKeydown);
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

const blockSubmitButton = () => {
  imgButtonSubmit.disabled = true;
  imgButtonSubmit.textContent = 'Фотография загружается';
};

const unblockSubmitButton = () => {
  imgButtonSubmit.disabled = false;
  imgButtonSubmit.textContent = 'Опубликовать';
};

function onFormSubmit (evt) {
  evt.preventDefault();
  blockSubmitButton();
  const formData = new FormData(evt.target);
  sendData(
    () => {
      closeModal();
      showSuccessMessage();
      unblockSubmitButton();
    },
    () => {
      showErrorMessage();
      unblockSubmitButton();
    },
    formData,
  );
}


export { activateUploadFile };

