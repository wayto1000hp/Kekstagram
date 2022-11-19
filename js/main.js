import getThumbnail from './thumbnail.js';
import { activateUploadFile, setUserFormSubmit, closeModal } from './form.js';
import { showErrorAlert } from './util.js';
import { getData } from './api.js';
import './effects.js';
import './image-scale.js';

activateUploadFile();
getData(getThumbnail, showErrorAlert);

setUserFormSubmit(closeModal);
