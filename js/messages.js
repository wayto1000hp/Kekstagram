const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');

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

const onErrorButtonClick = () => {
  hideMessage();};

export { showErrorMessage, showSuccessMessage };
