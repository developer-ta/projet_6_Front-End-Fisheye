import { pageBuilder } from '../../../templates/photographer/photographe.js';

//Mettre le code JavaScript lié à la page photographer.html
const initPage = (mediasData, photographer) => {

  const isPageBuilded = document.querySelector('#profile').dataset.pageBuilded;

  // check page already builded
  if (!isPageBuilded) {

    pageBuilder(mediasData, photographer);
  }
};

export const renderPage = (mediasData, photographer) => {

  initPage(mediasData, photographer);

};

//app start hear 
async function main() {

  if (location.pathname === '/photographer.html') { 

    // wait for import of module Factory
  const factory = await import('../../../services/router/factory.js');
  factory.Factory.prototype.getPage();

  }
}
main();
