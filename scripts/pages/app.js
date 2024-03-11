import { ViewModel } from '../models/photographesVm.js';
import { Factory } from '../services/router/factory.js';
import { FetchApi } from '../services/api/httpClient.js';

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
    this.vm = await new ViewModel(this.allData);

    // this.photographers = this.vm.getPhotographeList();
    // this.medias = this.vm.getMediaList();
    //routage
    Factory._models = this.vm;
    Factory.getPage();
    //this.router.getNewPage(photographersVm);
    //views controller
  }
  // async getPhotographers() {
  //   await new FetchApi().get('/data/photographers.json').then((data) => {
  //     this.photographersData = data;
  //   });
  // }
}

new App().main();
