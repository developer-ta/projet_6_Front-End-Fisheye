export class ViewModel {
  constructor({ photographers, media }) {
    debugger;
    this._photographeList = photographers;
    this._photographe;
    this._media = media;
    this.setLocalStorage();
  }

  getPhotographeList() {
    if (this._photographeList) {
      return this._photographeList;
    } else {
      return getLocalStorage('photographeList') ? getLocalStorage('photographeList') : '';
    }
  }
  getPhotographeById(id) {
    if (this._photographeList) {
      return (this._photographe = this.photographeList.find((el) => el.id == id));
    } else {
      return getLocalStorage()
        ? getLocalStorage().this.photographeList.find((el) => el.id == id)
        : '';
    }
  }
  getMediaList() {
    if (this._media) {
      return this._media;
    } else {
      return getLocalStorage('mediaList') ? getLocalStorage('mediaList') : '';
    }
  }
  setLocalStorage() {
    if (this._photographeList) {
      localStorage.setItem('photographeList', JSON.stringify(this._photographe));
    }
    if (this._media) {
      localStorage.setItem('mediaList', JSON.stringify(this._media));
    }
  }
  getLocalStorage(keyName) {
    if (localStorage.getItem(keyName)) {
      return JSON.parse(localStorage.getItem(keyName));
    }
    return;
  }
}
// "name": "Mimi Keel",
// 	"id": 243,
// 	"city": "London",
// 	"country": "UK",
// 	"tagline": "Voir le beau dans le quotidien",
// 	"price": 400,
// 	"portrait": "MimiKeel.jpg"
