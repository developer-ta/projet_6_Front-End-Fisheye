

export class FetchApi {
  constructor() {
    this.allData = null;
  }

  //fetch all data list
  async getAllData(url) {
    try {
      debugger;
      let response = await fetch(url);

      let data = await response.json();

      return data;

    } catch (error) {

      console.error(error);
    }
  }

  // async post(url, dataPost) {}
  // async update(url, dataUp) {}
  // async delete(url, deleteId) {}
}
