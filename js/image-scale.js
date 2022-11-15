const scaleControlSmaller  = document.querySelector('.scale__control--smaller');
const scaleControlBigger  = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const scaleImage = (value = DEFAULT_SCALE) => {
imgUploadPreview.scale.transform = `scale(${value / 100})`;
scaleControlValue = `${value}%`;
};
const onSmallerButtonClick = () => {
const currentValue = parseInt(scaleControlValue)
}
