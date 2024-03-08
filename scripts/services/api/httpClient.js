//resolve,reject,pending,success,error,...options
//promise((res,rej)=>{}).then(res=>{}).catch(err=>{})

class FetchApi {
  //fetch action with url

  async get(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }
  async post(url, dataPost) {}
  async update(url, dataUp) {}
  async delete(url, deleteId) {}
}
