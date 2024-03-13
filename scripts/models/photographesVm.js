export class ViewModel {
  constructor ({ photographers, media }) {
    debugger;
    if (this.isExisteVm) {
      return ViewModel.instanceVm;
    }
    this._photographeList = photographers;
    this._photographe;
    this._media = media;
    if (this._photographeList && this._media) {
      this.setLocalStorage();
    }
    this.isExisteVm = true;
    ViewModel.instanceVm = this;
  }

  getPhotographeList() {
    if (this._photographeList) {
      return this._photographeList;
    } else {
      this._photographeList = this.getLocalStorage('photographeList');
      debugger;
      return this._photographeList ?? '';
    }
  }
  getPhotographeById(id) {
    if (this._photographeList) {
      return (this._photographe = this._photographeList.find((el) => el.id == id));
    } else {
      let photographe = this.getLocalStorage(id);
      return photographe ? this._photographeList.find((el) => el.id == id) : '';
    }
  }
  getMediaList() {
    if (this._media) {
      return this._media;
    } else {
      this._media = this.getLocalStorage('mediaList');
      return this._media ?? '';
    }
  }
  setLocalStorage() {
    if (this._photographeList) {
      localStorage.setItem('photographeList', JSON.stringify(this._photographeList));
    }
    if (this._media) {
      localStorage.setItem('mediaList', JSON.stringify(this._media));
    }
  }
  getLocalStorage(keyName) {
    debugger;
    if (localStorage.getItem(keyName)) {
      let val = localStorage.getItem(keyName);
      if (val != null) {
        return JSON.parse(val);
      }
    }
    return;
  }
}

export const getAllModel = (data) => new ViewModel(data);


// "name": "Mimi Keel",
// 	"id": 243,
// 	"city": "London",
// 	"country": "UK",
// 	"tagline": "Voir le beau dans le quotidien",
// 	"price": 400,
// 	"portrait": "MimiKeel.jpg"
