import getThumbnail from './thumbnail.js';
import { activateUploadFile } from './form.js';
import { showErrorAlert } from './util.js';
import { getData } from './api.js';

activateUploadFile();
getData(getThumbnail, showErrorAlert);


