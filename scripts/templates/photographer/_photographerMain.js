import { photographerTemplate } from './../accueil/index.js';

//main part
export const _mainSection = (mediasData, phData) => {
	_ProfilePartiale(phData);
	_sortSelectMenuPartiale();
	_gallerySection(mediasData, phData);
};
//profile partiale
const _ProfilePartiale = (data) => {
	// DOM elements
	debugger;
	const $profileHtml = photographerTemplate(data).getUserCardDOM();
	const $div_profile = document.querySelector('#profile');
	$div_profile.appendChild($profileHtml);
	const $btn_contact = $div_profile.querySelector('.contact_button');
	const $img_container = $div_profile.querySelector('.img-container');
	// position dom element
	//$div_profile.insertAdjacentElement('afterend', $img);
	$img_container.insertAdjacentElement('afterend', $btn_contact);
	$div_profile.appendChild($profileHtml).setAttribute('data-pageBuilded', 'true');
};
//main > partial
const _sortSelectMenuPartiale = () => {
	const $menuSection = document.querySelector('#menu')

	let menu_html = `<div>
	<label for="menu-tri">Trier par</label>
	<select name="menu-tri" id="select_tri">
	  <option value="Popularité" selected>Popularité</option>
	  <option value="Date">Date</option>
	  <option value="Titre">Titre</option>
	</select>
	</div>`
	$menuSection.innerHTML = menu_html;

};

// main > gallery
const _gallerySection = (mediasData, phData) => {
	// {
	// 	"id": 342550,
	// 	"photographerId": 82,
	// 	"title": "Fashion Yellow Beach",
	// 	"image": "Fashion_Yellow_Beach.jpg",
	// 	"likes": 62,
	// 	"date": "2011-12-08",
	// 	"price": 55
	// }
	debugger;
	mediasData.forEach(el => {
		let imgUrl = `${phData.name.split(' ')[0]}/${el.image}`
		console.log('imgUrl: ', imgUrl);
		let picture = `/assets/Sample Photos/${imgUrl}`;
		let $img_html = `<div class="galleryImg-container" > <img src="${picture}"></div>`
		const $gallery = document.querySelector('#gallery')
		$gallery.innerHTML += $img_html;
	});
};

//_gallerySection > partial
const _likePartiale = () => {};
const _likeTotalPartiale = () => {};