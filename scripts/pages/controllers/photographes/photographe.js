import { ViewModel } from '../../../models/photographesVm.js';

import { pageBuilder } from '../../../templates/photographer/photographe.js';

//Mettre le code JavaScript lié à la page photographer.html
const initPage = (mediasData, photographer) => {

  const isPageBuilded = document.querySelector('#profile').dataset.pageBuilded;
  if (!isPageBuilded) {
    pageBuilder(mediasData, photographer);
  }
};
const updatePage = () => {};
export const renderPage = (mediasData, photographer) => {

  initPage(mediasData, photographer);
};
debugger;

async function main() {

  if (location.pathname === '/photographer.html') { 
  const factory = await import('../../../services/router/factory.js');
  factory.Factory.prototype.getPage();
    console.log('renderPage: ');
  }
}
main();
