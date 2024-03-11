import { Factory } from '../../services/router/factory.js';

export function photographerTemplate(data) {
  const { name, portrait, city, tagline, price, country, id } = data;

  const picture = `/assets/Sample Photos/Photographers ID Photos/${portrait}`;

  function getUserCardDOM() {
    let $article = document.createElement('article');
    $article.setAttribute('id', `${id}`);
    // <div class=".card-container"></div>
    let html = `
<div class="img-container"><img src="${picture}"></div>
<h2>${name}</h2>
<div class="detail-container">
<h4>${city},${country}</h4>
<p>${tagline}</p>
<p>${price}€/jour</p>
</div>`;
    $article.innerHTML = html;
    let $h2 = $article.querySelector('h2');
    let $img = $article.querySelector('.img-container');
    $img.addEventListener('click', (ev) => {
      ev.preventDefault();
      debugger;
      history.pushState({ id: $article.id, name: $h2.textContent }, '', '/photographer.html');
      console.log('$article: ', history.state);
      Factory.getPage();
    });

    return $article;
  }
  return { name, picture, getUserCardDOM };
}
