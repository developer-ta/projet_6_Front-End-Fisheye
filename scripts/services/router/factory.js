import { ViewModel } from '../../models/photographesVm.js';
import { init } from '../../pages/controllers/accueil/index.js';
import { renderPage } from '../../pages/controllers/photographes/photographe.js';

//import { renderPage } from './../../pages/controllers/photographes/photographe.js';
export class Factory {
  constructor() {}
  get pathName() {
    return location.pathname;
  }
  get pathParams() {
    if (history.state && history.state.id) {
      return history.state.id;
    }
    return localStorage.getItem('id');
  }
  get models() {
    const vm = ViewModel.prototype.constructor.instanceVm;
    return {
      photographers: ViewModel.prototype.getPhotographeList(),
      medias: ViewModel.prototype.getMediaList(),
    };
  }

  getPage() {
    console.log('Inside Factory.getPage()');
    debugger;
    const { photographers, medias } = this.models;

    if (this.pathName === '/photographer.html') {
      let photographer = photographers.find((ph) => ph.id == this.pathParams);
      let mediaList = medias.filter((ph) => ph.photographerId == this.pathParams);


      if (photographer && mediaList) {
        //page photographer
        renderPage(mediaList, photographer);
        return;
      } else {
        throw new Error(`Photographe  id = ${this.pathParams?.id} existe pas !`);
      }

    } else if (this.pathName === '/index.html' || this.pathName === '/') {
      //page accueil
      init(photographers);
    }
  }
}

export function navigatePage() {
  new Factory().getPage();
}
