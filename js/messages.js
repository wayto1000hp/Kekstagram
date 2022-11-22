import { isEscapeKey } from './util.js';

const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');

const showMessage = (messageTemplate) => {
  const messageElement = messageTemplate.cloneNode(true);
  const closeButton = messageElement.querySelector('button');

  function hideMessage () {
    messageElement.remove();
  }

  const onEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      hideMessage();
      document.removeEventListener('keydown', onEscKeydown);
    }
  };

  const onMaskClick = (evt) => {
    if (evt.target.nodeName === 'SECTION') {
      messageElement.removeEventListener('click', onMaskClick);
      hideMessage();
    }
  };

  const onCloseButtonClick = () => {
    closeButton.removeEventListener('click', onCloseButtonClick);
    hideMessage();
  };

  document.addEventListener('keydown', onEscKeydown);
  messageElement.addEventListener('click', onMaskClick);
  closeButton.addEventListener('click', onCloseButtonClick);
  document.body.append(messageElement);
};

const showErrorMessage = () => showMessage(errorMessageTemplate);
const showSuccessMessage = () => showMessage(successMessageTemplate);

export { showErrorMessage, showSuccessMessage };


