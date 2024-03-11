//resolve,reject,pending,success,error,...options
//promise((res,rej)=>{}).then(res=>{}).catch(err=>{})

export class FetchApi {
  constructor() {
    this.allData = null;
  }

  //fetch action with url

  // async getAllData(url) {
  //   await this.callBackData(url);

  //   return this._getAllData;
  // }

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

  async post(url, dataPost) {}
  async update(url, dataUp) {}
  async delete(url, deleteId) {}
}
