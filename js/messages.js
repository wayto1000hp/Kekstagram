import {isEscapeKey} from './util.js';

const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const successMessageElement = successMessageTemplate.cloneNode(true);
const errorMessageElement = errorMessageTemplate.cloneNode(true);

const onMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideMessage();
  }
};
const onErrorButtonClick = () => hideMessage();

const showSuccessMessage = () => {
  document.addEventListener('keydown', onMessageEscKeydown);
  successMessageElement.addEventListener('click', onErrorButtonClick);
  successMessageElement.querySelector('.success__button').addEventListener('click', onErrorButtonClick);
  document.querySelector('body').append(successMessageElement);
};

const showErrorMessage = () => {
  document.addEventListener('keydown', onMessageEscKeydown);
  errorMessageElement.addEventListener('click', onErrorButtonClick);
  errorMessageElement.querySelector('.error__button').addEventListener('click', onErrorButtonClick);
  document.querySelector('body').append(errorMessageElement);
};

function hideMessage () {
  const messageElement = document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  successMessageElement.removeEventListener('click', onErrorButtonClick);
  errorMessageElement.removeEventListener('click', onErrorButtonClick);
  document.removeEventListener('keydown', onMessageEscKeydown);
  errorMessageElement.querySelector('.error__button').removeEventListener('click', onErrorButtonClick);
  successMessageElement.querySelector('.success__button').addEventListener('click', onErrorButtonClick);
}


export { showErrorMessage, showSuccessMessage };
