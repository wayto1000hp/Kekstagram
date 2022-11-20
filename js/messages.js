import {isEscapeKey} from './util.js';

const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');

const onMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideMessage();
  }
};
const onErrorButtonClick = () => {
  hideMessage();};

const showSuccessMessage = () => {
  const successMessageElement = successMessageTemplate.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onErrorButtonClick);
  document.querySelector('body').append(successMessageElement);
};

const showErrorMessage = () => {
  const errorMessageElement = errorMessageTemplate.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  errorMessageElement.querySelector('.error__button').addEventListener('click', onMessageEscKeydown);
  document.querySelector('body').append(errorMessageElement);
};

function hideMessage () {
  const messageElement = document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  document.removeEventListener('keydown', onMessageEscKeydown);
  document.removeEventListener('click', onErrorButtonClick);
}


export { showErrorMessage, showSuccessMessage };
