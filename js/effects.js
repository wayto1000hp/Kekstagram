import { EFFECTS, DEFAULT_EFFECT } from './constants.js';

const imgPreview = document.querySelector('.img-upload__preview img');
const uploadForm = document.querySelector('.img-upload__form');
const effectLevel = document.querySelector('.effect-level__value');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderEffectElement = document.querySelector('.img-upload__effect-level');

let currentEffect = DEFAULT_EFFECT;

const isDefault = () => currentEffect === DEFAULT_EFFECT;

const updateSlider = () => {
  sliderElement.classList.remove('hidden');
  sliderEffectElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: currentEffect.min,
      max: currentEffect.max,
    },
    step: currentEffect.step,
    start: currentEffect.max,
  });
  if (isDefault()) {
    sliderElement.classList.add('hidden');
    sliderEffectElement.classList.add('hidden');
  }
};

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  currentEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  updateSlider();
};

const onSliderUpdate = () => {
  imgPreview.style.filter = 'none';
  imgPreview.className = '';
  effectLevel.value = '';
  if (isDefault()) {
    return;
  }
  const sliderValue = sliderElement.noUiSlider.get();
  imgPreview.style.filter = `${currentEffect.style}(${sliderValue}${currentEffect.unit})`;
  imgPreview.classList.add(`effects__preview--${currentEffect.name}`);
  effectLevel.value = sliderValue;
};

const resetEffect = () => {
  currentEffect = DEFAULT_EFFECT;
  updateSlider();
};

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});
updateSlider();

const addChangeEvent = () => {
  uploadForm.addEventListener('change', onFormChange);
};

const removeChangeEvent = () => {
  uploadForm.removeEventListener('change', onFormChange);
};

sliderElement.noUiSlider.on('update', onSliderUpdate);

export { resetEffect, addChangeEvent, removeChangeEvent };
