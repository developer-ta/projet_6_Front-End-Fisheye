import { ViewModel } from '../../../models/photographesVm.js';
import { Factory } from '../../../services/router/factory.js';
import { pageBuilder } from '../../../templates/photographer/photographe.js';

//Mettre le code JavaScript lié à la page photographer.html
const initPage = (mediasData, photographer) => {
  debugger;
  const isPageBuilded = document.querySelector('#profile').dataset.pageBuilded;
  if (!isPageBuilded) {
    pageBuilder(mediasData, photographer);
  }
};
const updatePage = () => {};
export const renderPage = (mediasData, photographer) => {
  debugger;
  initPage(mediasData, photographer);
};
debugger;
console.log('renderPage: ', start);
