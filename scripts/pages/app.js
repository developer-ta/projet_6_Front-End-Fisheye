import { ViewModel } from '../models/photographesVm.js';
import { FetchApi } from '../services/api/httpClient.js';
import { Factory } from './../services/router/factory.js';

class App {
  constructor() {

    this.fetchApi = new FetchApi();
  }
  async main() {

    //api
    this.allData = await this.fetchApi.getAllData('/data/photographers.json');

    //init models
    new ViewModel(this.allData);
    //page
    Factory.prototype.getPage();

  }
}

new App().main();
