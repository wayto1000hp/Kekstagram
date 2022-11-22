import { isEscapeKey } from './util.js';

const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');

const showMessage = (messageTemplate, onEscKeydown) => {
  const messageElement = messageTemplate.cloneNode(true);
  const closeButton = messageElement.querySelector('button');

  function hideMessage () {
    document.removeEventListener('keydown', onEscPress);
    messageElement.remove();

    if (onEscKeydown) {
      document.addEventListener ('keydown', onEscKeydown);
    }
  }

  function onEscPress (evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      hideMessage();
    }
  }

  const onMaskClick = (evt) => {
    if (evt.target.nodeName === 'SECTION') {
      hideMessage();
    }
  };

  const onCloseButtonClick = () => {
    hideMessage();
  };

  document.addEventListener('keydown', onEscPress);
  messageElement.addEventListener('click', onMaskClick);
  closeButton.addEventListener('click', onCloseButtonClick);
  document.body.append(messageElement);
};

const showErrorMessage = (onEscKeydown) => showMessage(errorMessageTemplate, onEscKeydown);
const showSuccessMessage = () => showMessage(successMessageTemplate);

export { showErrorMessage, showSuccessMessage };


