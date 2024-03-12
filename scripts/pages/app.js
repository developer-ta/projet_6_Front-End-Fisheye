import { ViewModel } from '../models/photographesVm.js';
import { FetchApi } from '../services/api/httpClient.js';
import { navigatePage } from './../services/router/factory.js';

class App {
  constructor() {
    debugger;
    this.fetchApi = new FetchApi();
  }
  async main() {
    debugger;

    //api
    this.allData = await this.fetchApi.getAllData('/data/photographers.json');
    //models
    new ViewModel(this.allData);

    // this.photographers = this.vm.getPhotographeList();
    // this.medias = this.vm.getMediaList();
    //routage
    navigatePage();
    //this.router.getNewPage(photographersVm);
    //views controller
  }
}

new App().main();
