export function photographerTemplate(data) {
  const { name, portrait, city, tagline, price, country, id } = data;

  const picture = `/assets/Sample Photos/Photographers-ID-Photos/${portrait}`;

  function getUserCardDOM() {

    //Dom element
    let $article = document.createElement('article');
    $article.setAttribute('id', `${id}`);

    //template index
    let html = `
<div class="img-container"><img src="${picture}"></div>
<h2>${name}</h2>
<div class="detail-container">
<h4>${city},${country}</h4>
<p>${tagline}</p>
<p>${price}€/jour</p>
</div>`;
    $article.innerHTML = html;

    if (location.pathname === '/index.html' || location.pathname === '/') {

      const $img = $article.querySelector('.img-container');
      $img.addEventListener('click', (ev) => {
        ev.preventDefault();
        debugger;
        history.pushState({ id: $article.id }, '', '/photographer.html');
        console.log('$article: ', history.state);
        localStorage.setItem('id', `${$article.id}`);
        location.href = location.origin + location.pathname;
      });
    }

    return $article;
  }
  return { name, picture, getUserCardDOM };
}
