import { init } from '../../pages/controllers/accueil/index.js';

export class Factory {
  static _pathName;
  static _pathParams;
  static _models;

  static get pathName() {
    return (Factory._pathName = location.pathname);
  }
  static get pathParams() {
    Factory._pathParams = history.state;
    return Factory._pathParams;
  }
  static get models() {
    Factory._models;
    return {
      photographers: Factory._models.getPhotographeList(),
      medias: Factory._models.getMediaList(),
    };
  }
  // static getDefaultPage(photographers) {
  //   debugger;
  //   //page accueil
  //   init(photographers);
  // }

  static getPage() {
    // Factory._pathName = Factory.pathName;
    // Factory._pathParams = Factory._pathParams;
    debugger;
    const { photographers, medias } = Factory.models;
    if (Factory.pathName === '/photographer.html') {
      let photographer = photographers.find(
        (ph) => ph.id == Factory.pathParams?.id && ph.name == Factory.pathParams.name
      );
      console.table(photographer, medias);
    } else if (Factory.pathName === '/index.html' || Factory.pathName === '/') {
      //page accueil
      init(photographers);
    }
  }
}
