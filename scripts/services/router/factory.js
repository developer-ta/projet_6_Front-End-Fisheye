import { ViewModel } from '../../models/photographesVm.js';
import { init } from '../../pages/controllers/accueil/index.js';

//import { renderPage } from './../../pages/controllers/photographes/photographe.js';
class Factory {
  constructor() {}
  get pathName() {
    return location.pathname;
  }
  get pathParams() {
    return history.state;
  }
  get models() {
    const vm = ViewModel.prototype.constructor.instanceVm;
    return {
      photographers: vm.getPhotographeList(),
      medias: vm.getMediaList(),
    };
  }
  // static getDefaultPage(photographers) {
  //   debugger;
  //   //page accueil
  //   init(photographers);
  // }

  getPage() {
    console.log('Inside Factory.getPage()');
    debugger;
    const { photographers, medias } = this.models;
    if (this.pathName === '/photographer.html') {
      let photographer = photographers.find(
        (ph) => ph.id == this.pathParams?.id && ph.name == this.pathParams.name
      );
      console.table(photographer, medias);

      //  renderPage(photographer, medias);
    } else if (this.pathName === '/index.html' || this.pathName === '/') {
      //page accueil
      init(photographers);
    }
  }
}

export function navigatePage() {
  new Factory().getPage();
}
