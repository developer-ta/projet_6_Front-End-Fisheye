function photographerTemplate(data) {
    const { name, portrait, city, tagline, price, country } = data;

    const picture = `/assets/Sample Photos/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
      let article = document.createElement('article');
      // <div class=".card-container"></div>
      let html = `
<div class="img-container"><img src="${picture}"></div>


<h2>${name}</h2>
<div class="detail-container">
<h4>${city},${country}</h4>
<p>${tagline}</p>
<p>${price}€</p>
</div>`;
      article.innerHTML = html;
      console.log('article: ', article);

      return article;
    }
    return { name, picture, getUserCardDOM }
}