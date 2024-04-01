export function photographerTemplate(data) {
  const { name, portrait, city, tagline, price, country, id } = data;

  const picture = `/assets/Sample Photos/Photographers-ID-Photos/${portrait}`;

  function getUserCardDOM() {

    //Dom element
    let $article = document.createElement('article');
    $article.setAttribute('id', `${id}`);

    //template index
    let html = `
    <div class="img-container" role="Link" aria-label="${name}">
    <img src="${picture}" alt="${name}">
    </div>
  <h1>${name}</h1>
  <div class="detail-container">
    <p id='city'>${city},${country}</p>
    <p>${tagline}</p>
    <p>${price}€/jour</p>
  </div>`;
    $article.innerHTML = html;

    if (location.pathname === '/index.html' || location.pathname === '/') {

      const $img = $article.querySelector('.img-container');
      $img.addEventListener('click', (ev) => {
        ev.preventDefault();

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
