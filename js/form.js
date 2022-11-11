import {isEscapeKey} from './util.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const cancelUpload = document.querySelector('#upload-cancel');

const closeModal = () => {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeydown);
  cancelUpload.removeEventListener('click', onCancelUploadClick);
  uploadForm.reset();
  uploadFile.value = '';
};
const openModal = () => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener ('keydown', onEscKeydown);
  cancelUpload.addEventListener('click', onCancelUploadClick);
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

uploadFile.addEventListener('change', onUploadFileChange);

