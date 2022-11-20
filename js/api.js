const getData = (onSuccess, onError) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error(`${response.status} - ${response.statusText}`);
    })
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch(() => onError('Произошла ошибка при получении данных.'));
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple1',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Произошла ошибка при отправке данных.');
      }
    })
    .catch(() => {
      onFail('Произошла ошибка при отправке данных.');
    });
};

export { getData, sendData };
